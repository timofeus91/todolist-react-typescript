import React, {FC} from "react";
import './Info.css';

interface InfoInterface {
    inWork: string
    done: string
}

const Info: FC<InfoInterface> = ({inWork,done}) => {
    return (
        <section className="info">
            <h1 className="info__title">ToDo List</h1>
            <p className="info__subtitle">{`${inWork} in work and ${done} done`}</p>
        </section>
    );
}

export default Info;
