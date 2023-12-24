import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faClockRotateLeft, faUsers, faCircleInfo, faSignOut } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/home-page.module.css'
import TabHome from './tab-home'
import TabHistory from './tab-history'
import TabInfo from './tab-info'
import TabCardManager from './tab-card-manager'
import React, { useEffect, useState, useRef } from 'react'

const ws = new WebSocket("ws://localhost:42600/ws/attendance");

const HomePage = (props) => {
    const isSetting = useRef(false);

    const [triggerTabHistory, setTriggerTabHistory] = useState(false);
    const [triggerTabCardManager, setTriggerTabCardManager] = useState(false);
    const [cardId, setCardId] = useState(0);
    const [triggerNewCard, setTriggerNewCard] = useState(false);
    const [cardIdAdd, setCardIdAdd] = useState(0);
    const [triggerNewCardAdd, setTriggerNewCardAdd] = useState(false);

    useEffect(() => {
        onClickHome();
    }, [])

    useEffect(() => {
        ws.onopen = (event) => {
            console.log('Connected WebSocket');
        };

        ws.onmessage = function (event) {
            console.log(event.data);
            if (!isSetting.current) {
                setCardId(event.data);
                setTriggerNewCard(prev => !prev);
            }
            else {
                setCardIdAdd(event.data);
                setTriggerNewCardAdd(prev => !prev);
            }
        };
    }, [])

    const onClickHome = async () => {
        isSetting.current = false;
        setTriggerTabHistory(prev => !prev);
    }

    const onClickCardManager = async () => {
        isSetting.current = true;
        setTriggerTabCardManager(prev => !prev);
    }

    const wsSend = (message) => {
        if (ws.readyState === ws.OPEN) {
            ws.send(message);
        }
    }

    return (
        <div className={styles.myContainer}>
            <div className={styles.header}>
                {/* <div className={styles.containerLogo}>
                    <Image
                        src={logo}
                        width={120}
                        height={'auto'}
                        className={styles.logo}
                    />
                </div> */}
                <span className={styles.headerTitle}>ĐIỂM DANH SINH VIÊN</span>
                <div 
                    onClick={() => props.isLoginSuccess(false)}
                    style={{display: 'flex', alignItems: 'center', gap: '5px', position: 'absolute', top:'48px', right: '100px', userSelect: 'none', cursor: 'pointer'}}
                    className={styles.headerLogOut}
                >
                    <FontAwesomeIcon icon={faSignOut} fontSize={15} />
                    <span>Đăng xuất</span>
                </div>
            </div>
            <div className={`d-flex align-items-start`}>
                <div className={`nav flex-column nav-pills me-3 ${styles.tabMenu}`} id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <button
                        className={`nav-link active ${styles.myNavLink}`}
                        id="v-pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-home"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-home"
                        aria-selected="true"
                        onClick={onClickHome}>
                        <FontAwesomeIcon icon={faHouse} fontSize={20} /> Home
                    </button>
                    <button
                        className={`nav-link ${styles.myNavLink}`}
                        id="v-pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-profile"
                        aria-selected="false">
                        <FontAwesomeIcon icon={faClockRotateLeft} fontSize={20} /> History
                    </button>
                    <button
                        className={`nav-link ${styles.myNavLink}`}
                        id="v-pills-messages-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-messages"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-messages"
                        aria-selected="false"
                        onClick={onClickCardManager}>
                        <FontAwesomeIcon icon={faUsers} fontSize={20} /> Card Manager
                    </button>
                    {/* <button
                        className={`nav-link ${styles.myNavLink}`}
                        id="v-pills-settings-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-settings"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-settings"
                        aria-selected="false">
                        <FontAwesomeIcon icon={faCircleInfo} fontSize={20} /> Thông tin
                    </button> */}
                </div>
                <div className="tab-content" id="v-pills-tabContent">
                    <div
                        className="tab-pane fade show active"
                        id="v-pills-home"
                        role="tabpanel"
                        aria-labelledby="v-pills-home-tab"
                        tabIndex={0}>
                        <TabHome
                            trigger={triggerTabHistory}
                            triggerNewCard={triggerNewCard}
                            cardId={cardId}
                            wsSend={wsSend}
                        />
                    </div>
                    <div
                        className="tab-pane fade"
                        id="v-pills-profile"
                        role="tabpanel"
                        aria-labelledby="v-pills-profile-tab"
                        tabIndex={0}>
                        <TabHistory />
                    </div>
                    <div
                        className="tab-pane fade"
                        id="v-pills-messages"
                        role="tabpanel"
                        aria-labelledby="v-pills-messages-tab"
                        tabIndex={0}>
                        <TabCardManager
                            trigger={triggerTabCardManager}
                            cardIdAdd={cardIdAdd}
                            triggerNewCardAdd = {triggerNewCardAdd}
                        />
                    </div>
                    <div
                        className="tab-pane fade"
                        id="v-pills-settings"
                        role="tabpanel"
                        aria-labelledby="v-pills-settings-tab"
                        tabIndex={0}>
                        <TabInfo />
                    </div>
                </div>
            </div>

            <style global jsx>{`
                .nav-pills .nav-link{
                    border-radius: 0px;
                    text-align: left;
                }

                .tab-pane{
                    width: calc(100vw - 224px);
                }
            `}</style>
        </div>
    )
}
export default HomePage