import styles from '../styles/tab-history.module.css'
import { useState } from 'react'
import { convertDateTime, getCurrentDate } from './api/convert-time'
import { filterHistory } from './api/networking'

const TabHistory = () => {
    
    const [data, setData] = useState([]);
    const [dateFrom, setDateFrom] = useState(getCurrentDate());
    const [timeFrom, setTimeFrom] = useState("00:00");
    const [dateTo, setDateTo] = useState(getCurrentDate());
    const [timeTo, setTimeTo] = useState("23:59");


    const filterHistoryData = async () => {
        let dataFilter = {
            from: `${dateFrom} ${timeFrom}`,
            to: `${dateTo} ${timeTo}`,
            sort: "DESC"
        }
        let res = await filterHistory(dataFilter);
        if (res) {
            setData(res);
        }
    }

    const onClickFilter = () => {
        filterHistoryData();
    }

    return (
        <div>
            <div className={styles.groupSelectTime}>
                <div className={styles.groupFrom}>
                    <span>Từ</span>
                    <input type="date" className="form-control" aria-label="Text input with checkbox" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)}/>
                    <input type="time" className="form-control" aria-label="Text input with checkbox" value={timeFrom} onChange={(e) => setTimeFrom(e.target.value)}/>
                </div>
                <div className={styles.groupFrom}>
                    <span>Đến</span>
                    <input type="date" className="form-control" aria-label="Text input with checkbox" value={dateTo} onChange={(e) => setDateTo(e.target.value)}/>
                    <input type="time" className="form-control" aria-label="Text input with checkbox" value={timeTo} onChange={(e) => setTimeTo(e.target.value)}/>
                </div>
                <div className={styles.groupFrom}>
                    <button type="button" className="btn btn-success" onClick={onClickFilter}>Lọc</button>
                </div>
            </div>
            <div className={styles.containerTable}>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">ID Card</th>
                            <th scope="col">Họ và Tên</th>
                            <th scope="col">Thời gian vào</th>
                            <th scope="col">Thời gian ra</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{item.id_card}</td>
                                        <td>{item.username}</td>
                                        <td>{item.date_time_in ? convertDateTime(item.date_time_in) : '--'}</td>
                                        <td>{item.date_time_out ? convertDateTime(item.date_time_out) : '--'}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TabHistory