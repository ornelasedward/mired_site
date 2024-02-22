interface HeadingProps {
    title : string,
    center? : boolean,
    custom ? : string,
    end? : boolean
}

const Heading : React.FC <HeadingProps>= ( {title, center, custom, end}) => {
    return (
        <div className={`${center ? 'text-center' : 'text-start'} ${end ? 'text-end' : ''}`}>
            <h2 className={`font-clash ${custom ? custom : ''}`}> {title} </h2>
        </div>
    );
};

export default Heading;