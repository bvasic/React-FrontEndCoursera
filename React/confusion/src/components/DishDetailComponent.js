import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

    function RenderDish({dish}) {
            return (
                <div className='col-lg-12 col-md-5 col-sm-12 col-xs-12 m-1'>
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
    }

    function RenderComments({comments}) {
        const comms = comments.map(singleComment => {
            return (
                <li key={singleComment.id} class="goLeftComment">
                    <p>-- {singleComment.comment}</p>
                    <p> {singleComment.author}, {new Intl.DateTimeFormat("en-GB", {
                            year: "numeric",
                            month: "long",
                            day: "2-digit"
                        }).format(new Date(singleComment.date))}</p>
                        <hr></hr>
                </li>
            )
        })
        return (
            <div key={comms.id} className='col-12 col-md-12 m-1'>
                <h3 class="goLeft"> Comments </h3>
                <ul className='list-unstyled'>
                    {comms}
                </ul>
            </div>
        )
    }

    const DishDetail = (props) => {
        if( props.dish != null){
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-md-5 m-1">
                            <RenderDish dish={props.dish} />
                        </div>
                        <div className="col-6 col-md-5 m-1">
                            <RenderComments comments={props.dish.comments} />
                        </div>
                    </div>
                </div>
                )
            }
        else {
            return (
                <div></div>
            )
        }
    };

export default DishDetail;