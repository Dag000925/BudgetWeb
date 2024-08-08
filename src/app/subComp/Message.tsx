import { divide } from '@ant-design/plots/es/core/utils';
import React, {useState} from 'react';


const Message: React.FC = () => {
    const userName: string = "Bob"
    const myDate = new Date();
    const hours = myDate.getHours();
    let greet: string

    if (hours < 12)
        greet = "morning";
    else if (hours >= 12 && hours <= 17)
        greet = "afternoon";
    else if (hours >= 17 && hours <= 23)
        greet = "evening";
    else {
        greet = "Day"
    }
  return (
    <div>
        Good {greet} {userName}
    </div>
  );
};

export default Message;