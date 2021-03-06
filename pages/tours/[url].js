import { useRouter } from 'next/router'
// Detector de dispositivos
import useDeviceDetect from "../../components/DetectDevice";
import TourTemplate from '../../components/TourTemplate';
export default function XcaretPark() {
  // Devuelve si el dispositivo es movil 
  const router = useRouter()
  const { isMobile } = useDeviceDetect();
  // Setea el tipo de columna por el tipo de dispositivo (scroll para las entradas)
  // Aqui se hace la petición al endpoint para obtener tarjetas y se mandan al section
  const {url} = router.query 
  return (
    <TourTemplate url={url} isMobile={isMobile}/>
  );
}
