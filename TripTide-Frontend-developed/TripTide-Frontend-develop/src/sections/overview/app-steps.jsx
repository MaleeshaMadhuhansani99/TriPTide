import React from 'react';

import ClockIcon from './ClockIcon'; // Adjust the path based on your project structure

const Steps = () => {
  const steps = [
    { id: 1, title: 'Register with us', time: '2 minutes' },
    { id: 2, title: 'Create your activity', time: '30 minutes' },
    { id: 3, title: 'Start earning', time: '' },
  ];

  return (
    <div style={styles.container}>
      {steps.map((step, index) => (
        <div key={step.id} style={styles.stepContainer}>
          <div style={styles.stepCircle}>
            <span>{step.id}</span>
          </div>
          <div style={styles.stepDetails}>
            <span style={styles.stepTitle}>{step.title}</span>
            {step.time && (
              <div style={styles.stepTime}>
                <ClockIcon />
                <span style={{ marginLeft: '5px' }}>{step.time}</span>
              </div>
            )}
          </div>
          {index < steps.length - 1 && (
            <div style={styles.dotsContainer}>
              <div style={styles.dot} />
              <div style={styles.dot} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '20px',
  },
  stepContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    position: 'relative',
  },
  stepCircle: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#ff5722',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: '18px',
    fontWeight: 'bold',
    flexShrink: 0,
  },
  stepDetails: {
    marginLeft: '15px',
    display: 'flex',
    flexDirection: 'column',
  },
  stepTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333',
  },
  stepTime: {
    fontSize: '14px',
    color: '#888',
    marginTop: '5px', // Add some space between the title and the time
    display: 'flex',
    alignItems: 'center',
  },
  dotsContainer: {
    position: 'absolute',
    left: '18px',
    top: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '5px',
  },
  dot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: '#1E90FF', // Blue color
  },
};

export default Steps;
