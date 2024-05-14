import AddProductForm from "./AddProductForm";
import { CgCloseR } from "react-icons/cg";


const GoToAdd = () => {
    return (
        <div className="">
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-full my-14">
                    <div>
                        <AddProductForm></AddProductForm>
                    </div>
                    <div className="flex justify-end items-center gap-6">
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button, it will close the modal */}
                                <button className="absolute top-4 right-4 text-lg">
                                    <CgCloseR></CgCloseR>
                                </button>
                                <button className="btn">Close</button>
                            </form>
                        </div>
                        <div>
                            <button className="btn btn-primary mt-6">Save</button>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default GoToAdd;