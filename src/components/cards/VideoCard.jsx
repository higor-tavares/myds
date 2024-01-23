import { useState } from 'react';
import styles from './card.module.css';
import { Heart, HeartFill } from 'react-bootstrap-icons';
import { Play } from 'react-bootstrap-icons';

export default function VideoCard(props){
    const [heartFilled, setHeartFilled] = useState(false)

    const fillHeart = () => {
        setHeartFilled(!heartFilled);
    }

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
                <div className={styles.cardFooterButton} onClick={fillHeart}>
                    {{heartFilled} ? <Heart></Heart> : <HeartFill></HeartFill>}
                </div>
            </div>
        </div>
    );
}