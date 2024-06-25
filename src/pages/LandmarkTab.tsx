import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './LandmarkTab.css';

const LandmarkTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Landmarks</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Landmarks</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Landmarks page" />
      </IonContent>
    </IonPage>
  );
};

export default LandmarkTab;
