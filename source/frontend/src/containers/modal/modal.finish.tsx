import {Modal, ModalBody} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {onToggleFinishModalAction} from "@action/modal.action.tsx";
import {RootState} from "@reducer/root.reducer.tsx";

const ModalFinish = () => {
    const dispatch = useDispatch();
    const { isOpenFinishModal } = useSelector((root: RootState) => root.ModalReducer);

    return (
        <Modal show={isOpenFinishModal} className={"modal fade"} dialogClassName={"modal-dialog modal-lg modal-dialog-centered"} centered={true} contentClassName={"modal-content border-0 shadow"}>
            <ModalBody className={"modal-body p-0 border-0"}>
                <button type="button" className="btn btn-gray-200 p-0 border-2 width-3x height-3x rounded-circle flex-center position-absolute end-0 top-0 mt-3 me-3 z-1"
                    onClick={() => dispatch(onToggleFinishModalAction())}>
                    <i className="bx bx-x fs-5"></i>
                </button>
                <div className="d-md-flex row">
                    <div className="col-md-6">
                        <div className="d-none d-md-flex overflow-hidden bg-shade-primary rounded-3 rounded-end-0 h-md-100 position-relative">
                            <img src="/assets/img/backgrounds/bg9.jpeg" alt="" className="img-fluid"/>
                        </div>
                    </div>
                    <div className="col-md-6 h-100">
                        <div className="h-100 py-7 py-lg-9 px-lg-5 px-4 position-relative">
                            <h4 className="mb-2">해당 사진을 선정하시겠습니까?</h4>
                            <small>변경이 불가능하오니 신중히 선택하셔야합니다.</small>
                            <div className="position-relative mt-12">
                                <div className="d-flex align-items-center mb-2">
                                    <div className="me-2 me-lg-0  col-12">
                                        <a href="#!" className="btn btn-sm btn-outline-primary py-1 px-3  col-12"><i className="bx bxs-check-circle me-1"></i>예</a>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="me-2 me-lg-0  col-12">
                                        <a href="#!" className="btn btn-sm btn-outline-danger py-1 px-3  col-12"><i className="bx bxs-x-circle me-1"></i>아니오</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ModalBody>
        </Modal>
    )
}

export default ModalFinish;