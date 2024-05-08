

const Features = ({ title }) => {
    return (
        <div>
            <div className="flex items-end gap-3">
                <div>
                    <h3 className="text-4xl font-bold">{title}</h3>
                </div>
                <div className="w-[50px] h-[4px] bg-black">
                </div>
            </div>

        </div>
    );
};

export default Features;