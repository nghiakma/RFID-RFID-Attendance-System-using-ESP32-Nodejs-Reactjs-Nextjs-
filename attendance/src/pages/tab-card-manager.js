import styles from '../styles/tab-card-manager.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { getAllUser, addUser, editUser, deleteUser, getUserByIdCard } from './api/networking'
import { convertDateTime, getDateTime } from './api/convert-time'


const ModalAdd = (props) => {
    const [cardId, setCardId] = useState("");
    const [userName, setUserName] = useState("");

    useEffect(() => {
        setCardId(props.cardIdAdd);
    }, [props.cardIdAdd, props.triggerNewCardAdd])

    async function Save() {
        if (cardId.length > 0 && userName.length > 0) {

            let res = await getUserByIdCard(cardId);
            if (res) {
                if (res.length > 0) {
                    alert("Thẻ đã tồn tại");
                }
                else {
                    let data = {
                        id_card: cardId,
                        username: userName,
                        create_time: getDateTime()
                    }
                    let res = await addUser(data);
                    if (res) {
                        setCardId("");
                        setUserName("");
                        document.getElementById('closeModal').click();
                        props.handSaveSuccess();
                    }
                    else {
                        alert("Thất bại");
                    }
                }
            }
        }
        else {
            alert("Vui lòng nhập đầy đủ thông tin");
        }
    }

    function onCanelClick() {
        setCardId("");
        setUserName("");
    }

    return (
        <div className="modal fade" id="modalAdd" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Thêm thẻ</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onCanelClick} />
                    </div>
                    <div className="modal-body">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Mã thẻ</span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Mã thẻ"
                                aria-describedby="basic-addon1"
                                onChange={(e) => setCardId(e.target.value)}
                                value={cardId} />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon2">Họ và tên</span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Họ và tên"
                                aria-describedby="basic-addon2"
                                onChange={(e) => setUserName(e.target.value)}
                                value={userName} />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button id='closeModal' type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onCanelClick} >Close</button>
                        <button type="button" className="btn btn-primary" onClick={Save}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const TabCardManager = (props) => {
    const [dataRow, setDataRow] = useState(null);

    const [data, setData] = useState([]);
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [cardIdEdit, setCardIdEdit] = useState(props.id_card);
    const [userNameEdit, setUserNameEdit] = useState(props.username);

    useEffect(() => {
        getCardManager();
    }, [props.trigger])

    const getCardManager = async () => {
        let res = await getAllUser();
        if (res) {
            setData(res);
        }
    }

    const handSaveSuccess = () => {
        getCardManager();
    }

    const handEditClick = (row) => {
        setCardIdEdit(row.id_card);
        setUserNameEdit(row.username);
        setDataRow(row);
        setShowModalEdit(prev => !prev);
    }

    const handDeleteClick = async (row) => {
        let res = await deleteUser(row.id);
        if (res) {
            getCardManager();
        }
    }

    const ModalEdit = (props) => {
        let newCardID = props.dataRow.id_card;
        let newUserName = props.dataRow.username;

        async function Save() {
            if (newCardID.length > 0 && newUserName.length > 0) {
                let data = [{
                    id_card: newCardID,
                    username: newUserName,
                }, props.dataRow.id];
                let res = await editUser(data);
                if (res) {
                    setShowModalEdit(false);
                    props.handSaveSuccess();
                }
                else {
                    alert("Thất bại");
                }
            }
            else {
                alert("Vui lòng nhập đầy đủ thông tin");
            }
        }

        return (
            <div className="modal fade" id="modalEdit" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Sửa thẻ</h1>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={() => setShowModalEdit(prev => !prev)}
                            />
                        </div>
                        <div className="modal-body">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Mã thẻ</span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Mã thẻ"
                                    aria-describedby="basic-addon1"
                                    defaultValue={cardIdEdit}
                                    onChange={((e) => newCardID = (e.target.value))} />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon2">Họ và tên</span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Họ và tên"
                                    aria-describedby="basic-addon2"
                                    defaultValue={userNameEdit}
                                    onChange={((e) => newUserName = (e.target.value))} />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={() => setShowModalEdit(prev => !prev)}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={Save}>Save</button>
                        </div>
                    </div>
                </div>
                <style global jsx>{`
                    .modal{
                        display:block !important;
                        opacity: 100 !important;
                    }
                `}</style>
            </div>
        )
    }

    return (
        <div className={styles.panelHome}>
            <div className={styles.paneRight}>
                <div className={styles.groupButton}>
                    <div className={styles.cartTitle}>Danh sách học sinh</div>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalAdd"><FontAwesomeIcon icon={faAdd} fontSize={20} /> Thêm</button>
                </div>
                <div className={styles.containerTable}>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">ID Card</th>
                                <th scope="col">Họ và Tên</th>
                                <th scope="col">Ngày tạo</th>
                                <th scope="col">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((item, index) => {
                                    return (
                                        <tr key={item.id}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{item.id_card}</td>
                                            <td>{item.username}</td>
                                            <td>{convertDateTime(item.create_time)}</td>
                                            <td>
                                                <button
                                                    type="button"
                                                    className="btn btn-warning"
                                                    onClick={() => handEditClick(item)}
                                                ><FontAwesomeIcon icon={faEdit} fontSize={20} />
                                                    Sửa
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn btn-danger"
                                                    onClick={() => handDeleteClick(item)}
                                                ><FontAwesomeIcon icon={faTrash} fontSize={20} />
                                                    Xóa
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <ModalAdd
                cardIdAdd={props.cardIdAdd}
                triggerNewCardAdd={props.triggerNewCardAdd}
                handSaveSuccess={handSaveSuccess}
            />
            {
                showModalEdit ?
                    <ModalEdit handSaveSuccess={handSaveSuccess} dataRow={dataRow} /> : null
            }
            <style global jsx>{`
                tbody, td, tfoot, th, thead, tr {
                    border-color: #643f66;
                    color: #aba9a9;
                }

                tbody>tr:hover>th,tbody>tr:hover>td{
                    color: #fff !important;
                }

                td > button{
                    margin-right: 10px;
                }

                .modal-header > h1 {
                    color: black !important;
                }

                .input-group-text{
                    min-width: 100px;
                }
            `}</style>
        </div>
    )
}

export default TabCardManager