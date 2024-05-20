import AddOrderHead from "../AddOrder/AddOrderHead";
import InvoicedStatus from "./InvoicedStatus";

const Invoiced = () => {
    return (
        <div>
            <InvoicedStatus></InvoicedStatus>
            <AddOrderHead></AddOrderHead>
        </div>
    );
};

export default Invoiced;