import { useState, useEffect } from 'react';
import { Description } from './Description/Description';
import { Options } from './Options/Option';
import { Feedback } from './Feedback/Feedback';
import { Notification } from './Notification/Notification';


export const App = () => {
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  //const [clicks, setClicks] = useState(0);
  const [clicks, setClicks] = useState(() => {
    const savedClicks = window.localStorage.getItem("saved-clicks");
    if (savedClicks !== null) {
      return JSON.parse(savedClicks);
    }
    return 0;
  });

  useEffect(() => {
      window.localStorage.setItem("saved-clicks", JSON.stringify({ values }));
  }, [values]);

  const onUpdateFeedback = option => {
    setValues({
      ...values,
      [option]: values[option] + 1
    });
    
    setClicks(clicks + 1);
  };
  
    const onReset = () => {
    setValues({
      ...values,
      good: 0,
      neutral: 0,
      bad: 0
    });
    
    setClicks(0);
  };
  
  /*const updateGood = () => {
			setValues({
			...values,
			good: values.good + 1
		});
  };

  const updateNeutral = () => {
			setValues({
			...values,
			neutral: values.neutral + 1
		});
  };

  const updateBad = () => {
      setValues({
      ...values,
      bad: values.bad + 1
    });
  };*/

  const isHidden = clicks === 0;

  const totalFeedback = values.good + values.neutral + values.bad;

  const positiveFeedback = Math.round(((values.good + values.neutral) / totalFeedback) * 100);

  return (
    <div>
      <Description />
      <Options onUpdate={onUpdateFeedback} isHidden={isHidden} onReset={onReset} />
      {
        isHidden ? <Notification /> : <Feedback values={values} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback}/> 
      }
    </div>
  );
};
