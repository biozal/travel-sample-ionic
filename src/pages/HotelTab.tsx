import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './HotelTab.css';

const HotelTab: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Hotels</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Hotels</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <ExploreContainer name="hotels page"/>
            </IonContent>
        </IonPage>
    );
};

export default HotelTab;
