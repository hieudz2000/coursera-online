import React from 'react'
import { Link } from 'react-router-dom';
import './coursecard.css'

const renderRate = (rate) => {
    const el = [];
    for (let i = 0; i < rate; i++)
        el.push(<i key={i} className='bx bxs-star' ></i>)
    for (let i = rate; i < 5; i++)
        el.push(<i key={i} className='bx bx-star' ></i>)
    return el;
}

export const CourseCard = (props) => {
    return (
        <Link to={'/create-course/' + props.id} className='course-link'>
            <div className="card">
                <div className="card-header">
                    <h3>{props.name}</h3>
                </div>
                <div className="card-body">
                    {

                        props.image ? (
                            <img src={props.image} alt={props.name} />
                        ) : ''
                    }
                </div>
                <div className="card-footer">
                    <div className="card-footer_rate">
                        {
                            renderRate(props.rate)
                        }
                        <span>({props.students}) học viên</span>
                    </div>

                </div>
            </div>
        </Link>
    )
}
