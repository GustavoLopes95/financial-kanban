import React, { CSSProperties } from 'react';


const styles = {
    mainDiv: {
        display: 'flex',
        flexDirection: 'column',
        flex: '1 0 100%',
    }
}

const App = () => {
    return (
        <div style={styles.mainDiv as CSSProperties}>
            Wee work!!
        </div>
    );
}
export default App;