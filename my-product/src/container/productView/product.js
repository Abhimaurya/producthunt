import React, { Component } from 'react';
import Calendar from 'react-calendar';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
class ProductView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            isLoading: true,
            image: [],
            bgColor:"white",
            date: new Date(),

        }
    }
    componentDidMount() {
        this.fetchimage();
        console.log("value",this.state.image.flat(Infinity));
    }
    //for fetching image API
    fetchimage() {
        fetch('https://api.producthunt.com/v1/posts/all?access_token=ec6K_AQNMuru2NyK819R1M3DEsLwKUGR4S87Wphusp0')
            .then(response =>response.json())
            .then(data =>

                this.setState({
                    isLoading: false,
                    image: data.posts,

                })

            )
    }
    //checking to visble calender or not
    sendback = () => {
        console.log("state", this.state.visible)
        if (!this.state.visible)
            this.setState({
                visible: true,
            })
        else
            this.setState({
                visible: false,
            })

    }
    //To get value of picked of date
        onChange = date => {
            this.setState({ date:date });
            let datestr=this.state.date;
            let formatDate =datestr.toLocaleString().slice(0,8);
            console.log("date",formatDate);
            
            //filter data on basis of date-->
            // let filterDetails = this.state.image.filter((item) => {
            //     return item.postal_code.indexOf(formatDate) !== -1;
            //   });


        }
    //Change color of like button
    chngcolor = () =>{
        this.setState({
            bgColor:"gray",
        })
        console.log("back",this.state.bgColor)
    }
    
    render() {
        console.log('image', this.state.image);
        return (
           
            <React.Fragment>
                <div class="wrap">

                    <div class="date-picker">
                        <button class="btn" onClick={this.sendback}>Filter Post via Date</button>

                        <div class="date-detector">
                            {!this.state.visible ? 
                            <p>Please click above button to filter via date</p> :
                             <Calendar
                             onChange={(e)=>this.onChange(e)}
                             value={this.state.date}
                            />}
                        </div>
                    </div>

                    {this.state.isLoading ? <div className="loading">Loading...</div> : <div className="product">
                        {this.state.image.map((image,index,array) => (
                            
                        <div>
                            
                            <a href={image.discussion_url}>
                            <img src={image.makers[0] ? image.makers[0].image_url['original'] : 'https://ph-avatars.imgix.net/13237/original?auto=format&fit=crop&crop=faces&w=30&h=30'}></img>
                            </a>
                            
                            <p onClick={this.chngcolor}  style={{backgroundColor:this.state.bgColor}}>{index}</p>
                            </div>
                        ))}
                        
                    </div>
                    }
                    {/* Like section -Number of person */}
                    <div class="likesection">
                        <p>Number of person Liked product</p>
                        <div>
                            number person
                    </div>
                        <div>
                            number person
                    </div>
                        <div>
                            number person
                    </div>
                        <div>
                            number person
                    </div>
                        <div>
                            number person
                    </div>
                        <div>
                            number person
                    </div>
                        <div>
                            number person
                    </div>
                        <div>
                            number person
                    </div>
                        <div>
                            number person
                    </div>
                        <div>
                            number person
                    </div>


                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ProductView;