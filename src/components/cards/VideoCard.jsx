import styles from './card.module.css';
import { Heart } from 'react-bootstrap-icons';
import { Play } from 'react-bootstrap-icons';

export default function VideoCard(props){
    return (
        <div className={styles.card}>
            <div className={styles.cardImage}>
                <div className={styles.cardImageCover}>
                    <Play className={styles.playButton}></Play>
                </div>
                <img src={props.tumbnail} />
            </div>
            <div className={styles.cardBody}>
                <div className={styles.cardTitle}>
                    {props.title}
                </div>
                <div className={styles.cardDescription}>
                    {props.description}
                </div>
            </div>
            <div className={styles.classFooter}>
                <div>{props.info}</div>
                <div className={styles.cardFooterButton}><Heart></Heart></div>
            </div>
        </div>
    );
}