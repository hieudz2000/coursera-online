import { React, useState } from 'react'
import './table.css'

const Table = props => {
    const initDataShow = props.limit && props.bodyData ? props.bodyData.slice(0, Number(props.limit)) : props.bodyData;

    const [dataShow, setDataShow] = useState(initDataShow);

    let pages = 1

    let range = []

    if(props.limit !== undefined){
        let page = Math.floor(props.bodyData.length /Number(props.limit))
        pages = props.bodyData.length % Number(props.limit) === 0 ? page : page+1
        range = [...Array(page).keys()]
    }

    const [currPage, setcurrPage] = useState(1);
    const selectPage = page =>{
        const start = Number(props.limit) * (page-1);
        const end = start + Number(props.limit);

        setDataShow(props.bodyData.slice(start,end));
        setcurrPage(page)
    }
    return (
        <div className='table-wrapper'>
            <h1>{props.test}</h1>
            <table>
                {
                    props.headeData && props.renderHead ? (
                        <thead>
                            <tr>
                                {
                                    props.headeData.map((item, index) => props.renderHead(item, index))
                                }
                            </tr>
                        </thead>
                    ) : null
                }
                {
                    props.bodyData && props.renderBody ? (
                        <tbody>
                            {
                                dataShow.map((item, index) => props.renderBody(item, index))
                            }
                        </tbody>
                    ) : null
                }
            </table>
            {
                pages > 1 ? (
                    <div className="table_pagination">
                        {
                            range.map((item,index)=>(
                                <div key={index} className={`table_pagination-item ${currPage === index+1  ? 'active' : ''}`} onClick={()=>selectPage(index+1)}>
                                    {item + 1}
                                </div>
                            ))
                        }
                    </div>
                ):null
            }
        </div>
    )
}

export default Table

