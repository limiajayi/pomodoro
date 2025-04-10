import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PlayButton from './PlayButton';
import PauseButton from './PauseButton';
import SettingsButton from './SettingsButton';

function Timer() {

    const red = '#f54e4e';
    const green = '#4aec8c';

    return (
        <div>
            {/**Added a circular progress bar component using npm */}
            <CircularProgressbar value={60} text={'60%'}
            styles={buildStyles(
                {textColor:'#fff', pathColor:red, trailColor:'rgba(255, 255, 255, 2)'}
                )
            }/>

            {/**Added play button and pause button elements using hero icons*/}
            <div style={{marginTop: '20px'}}>
                <PlayButton />
                <PauseButton />
            </div>

            <div style={{marginTop: '20px'}}>
                <SettingsButton />
            </div>

        </div>
    );
}

export default Timer;