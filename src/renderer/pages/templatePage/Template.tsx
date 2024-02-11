import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

export default function Template() {
  const { id } = useParams();
  return (
    <>
      <Navbar />
      <div>{`param ${id}`}</div>
    </>
  );
}
