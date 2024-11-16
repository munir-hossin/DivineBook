import { CiMenuKebab } from "react-icons/ci";


function LeftRightModalsBtn({toggleLeftModal, toggleModal}) {
    return (
        <div>
              <button className="block lg:hidden text-2xl absolute top-1 left-[10px]" onClick={toggleLeftModal}>
                            ☰
                        </button>

                        {/* Right side bar icon 3 dod */}
                        <div className="lg:hidden p-4 ">
                            <CiMenuKebab className="text-2xl cursor-pointer absolute top-3 right-[3px]" onClick={toggleModal} />
                        </div>
        </div>
    );
}

export default LeftRightModalsBtn;