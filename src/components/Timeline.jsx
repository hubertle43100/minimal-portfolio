import React from "react";
import timeline from "./data/timeline";
import TimelineItem from "./TimelineItem";
import SectionTitle from "./SectionTitle";

function Timeline() {
    return (
        <div className='flex flex-col md:flex-row justify-start my-2'>
            <div className='w-full md:w-10/12'>
                <SectionTitle title={"Timeline"} />
                {timeline.map((item, i) => (
                    <TimelineItem
                        key={i}
                        year={item.year}
                        title={item.title}
                        duration={item.duration}
                        details={item.details}
                    />
                ))}
            </div>
        </div>
    );
}

export default Timeline;
