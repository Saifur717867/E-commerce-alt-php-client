

const Features = ({ title }) => {
    return (
        <div>
            <div className="flex items-center gap-3">
                <div>
                    <h3 className="text-4xl font-bold">{title}</h3>
                </div>
                <div className="w-[50px] h-[4px] bg-black mt-3">
                </div>
            </div>

        </div>
    );
};

export default Features;