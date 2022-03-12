import {
    IonContent,
    IonHeader,
    IonIcon,
    IonLabel,
    IonPage,
    IonRow,
    IonTabButton,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import {searchOutline, optionsOutline} from "ionicons/icons";

const Tab1: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonRow style={{justifyContent: 'right', padding: '5px'}}>
                        <IonIcon icon={searchOutline}/>
                        <IonIcon icon={optionsOutline}/>
                    </IonRow>
                    <IonRow>
                        <IonTitle>Dealer Catalog</IonTitle>
                    </IonRow>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Tab 1</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <ExploreContainer name="Tab 1 page"/>
            </IonContent>
        </IonPage>
    );
};

export default Tab1;
