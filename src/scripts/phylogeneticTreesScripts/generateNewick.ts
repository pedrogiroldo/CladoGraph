/* eslint-disable no-else-return */
import { DescendantObjectsArray } from '../../models/descendantsTypes';
import { ExternalGroup } from '../../models/externalGroupTypes';
import { TraitObjectsArray } from '../../models/traitsTypes';

type Props = {
  traits: TraitObjectsArray;
  externalGroup: ExternalGroup;
  descendants: DescendantObjectsArray;
};

/**
 *
 * @param {Props} props - object containing traits, externalGroup, descendants
 */
export default function generateNewick(props: Props) {
  const { traits, externalGroup, descendants } = props;

  const traitsAndNumberOfDescendantsThatHaveThem = traits.map((trait) => {
    const numberOfDescendants = descendants.reduce((count, descendant) => {
      if (descendant.traitsIds.includes(trait.id)) {
        return count + 1;
      }
      return count;
    }, 0);

    // Criar um novo objeto com a propriedade 'descendants'
    return {
      ...trait,
      descendants: numberOfDescendants,
    };
  });

  const newDescendants = descendants.map((descendant) => {
    // define value for syn, ples and apo for all descendant
    descendant.synapomorphies = 0;
    descendant.plesiomorphies = 0;
    descendant.apomorphies = 0;

    // search for plesiomorphies
    descendant.traitsIds.forEach((traitId) => {
      if (
        externalGroup.traitsIds.includes(traitId) &&
        (descendant.plesiomorphies || descendant.plesiomorphies === 0)
      ) {
        descendant.plesiomorphies += 1;
      }
    });

    // serach for syn and apo
    descendant.traitsIds.forEach((traitId) => {
      traitsAndNumberOfDescendantsThatHaveThem.forEach((trait) => {
        if (traitId === trait.id) {
          if (
            trait.descendants === 1 &&
            (descendant.synapomorphies || descendant.synapomorphies === 0)
          ) {
            descendant.synapomorphies += 1;
          }
        } else if (
          trait.descendants > 1 &&
          (descendant.apomorphies || descendant.apomorphies === 0)
        ) {
          descendant.apomorphies += 1;
        }
      });
    });

    return descendant;
  });

  const compararDescendentes = (a: any, b: any) => {
    if (a.synapomorphies !== b.synapomorphies) {
      return b.synapomorphies - a.synapomorphies; // Ordena por Sin em ordem descendente
    } else if (a.plesiomorphies !== b.plesiomorphies) {
      return a.plesiomorphies - b.plesiomorphies; // Ordena por Ples em ordem ascendente
    } else {
      return b.apomorphies - a.apomorphies; // Ordena por Apo em ordem descendente
    }
  };

  const sortedDescendants = newDescendants.sort(compararDescendentes);

  // Construindo a string Newick
  const newick =
    sortedDescendants
      .map(({ descendantName }) => `(${descendantName},`)
      .join('')
      .slice(0, -1) + Array(sortedDescendants.length + 1).join(')');

  return newick;
}
