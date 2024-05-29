import Swal from "sweetalert2";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import AddProductForm from "./AddProductForm";
import { CgCloseR } from "react-icons/cg";




const GoToAdd = () => {
    const axiosPublic = useAxiosPublic();
    const handleCreateProduct = async (e) => {

        console.log('clicked');
        e.preventDefault();
        const formData = new FormData();
        const title = e.target.title.value;
        const description = e.target.description.value;
        const productCode = e.target.productCode.value;
        const category = e.target.category.value;
        const price = e.target.price.value;
        const salePrice = e.target.salePrice.value;
        const featureImage = e.target.featureImage.files[0];
        const galleryImage = e.target.galleryImage.files[0];
        formData.append('title', title)
        formData.append('description', description)
        formData.append('productCode', productCode)
        formData.append('category', category)
        formData.append('salePrice', salePrice)
        formData.append('price', price)
        formData.append('featureImage', featureImage)
        formData.append('galleryImage', galleryImage)
        console.log(title, description, category, productCode, price, salePrice, featureImage, galleryImage);
        axiosPublic.post('/dashboard/product', formData)
            .then(res => {
                if (res.data.insertedId) {
                    console.log(res.data)
                    window.location.reload();
                    e.target.reset();
                    Swal.fire({
                        icon: 'success',
                        title: 'Good job!',
                        text: 'Applied successfully!',
                    })
                }
            })
            .catch();
    }
    return (
        <div className="">
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-full my-14">
                    <form onSubmit={handleCreateProduct} className="relative">
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
                        </div>
                        <div className="absolute bottom-0 right-20">
                            <button type="submit" className="btn btn-primary mt-6">Save</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default GoToAdd;