import AddOrderHead from "../AddOrder/AddOrderHead";
import DeliveredStatus from "./DeliveredStatus";


const Delivered = () => {
    return (
        <div>
            <DeliveredStatus></DeliveredStatus>
            <AddOrderHead></AddOrderHead>
        </div>
    );
};

export default Delivered;