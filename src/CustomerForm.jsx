import { useFormStatus } from "react-dom";
function CustomerForm() {
    const { pending } = useFormStatus();
    console.log("Submit");
    return (
        <div>
            <input type="text" name="name" />
            <button disabled={pending}>{pending ? "Submitting..." : "Submit"}</button>
        </div>
    )
}
export default CustomerForm;