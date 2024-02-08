import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

export default function Template() {
  const params = useParams();
  return (
    <>
      <Navbar />
      <div>{`param ${params.id}`}</div>
    </>
  );
}
