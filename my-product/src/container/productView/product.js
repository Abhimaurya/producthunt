import React, { Component } from 'react';
import Calendar from 'react-calendar'
class ProductView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            isLoading: true,
            image: [],
            bgColor:"white"
        }
    }

    componentDidMount() {
        this.fetchimage();
        console.log("value", this.state.image[0]);
    }

    fetchimage() {
        fetch('https://api.producthunt.com/v1/posts/all?access_token=ec6K_AQNMuru2NyK819R1M3DEsLwKUGR4S87Wphusp0')
            .then(response => response.json())
            .then(data =>

                this.setState({
                    isLoading: false,
                    image: data

                })

            )
    }

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

    chngcolor = () =>{
        this.setState({
            bgColor:"gray",
        })
        console.log("back",this.state.bgColor)
    }

    render() {
        return (
            <React.Fragment>
                <div class="wrap">

                    <div class="date-picker">
                        <button class="btn" onClick={this.sendback}>Filter Post via Date</button>

                        <div class="date-detector">
                            {!this.state.visible ? <p>Please click above button to filter via date</p> : <Calendar
                            // onChange={this.onChange}
                            // value={this.state.date}
                            />}
                        </div>
                    </div>

                    {this.state.isLoading ? <div className="loading">Loading...</div> : <div className="product">
                        {/* {this.state.image.map((index,image) => (
                            <img src={image.posts[index].makers[index].image_url}></img>
                        ))} */}
                        <div><img ></img><p onClick={this.chngcolor}  style={{backgroundColor:this.state.bgColor}}>Like</p></div>
                        <div><img ></img><p>Like</p></div>
                        <div><img ></img><p>Like</p></div>
                        <div><img ></img><p>Like</p></div>
                        <div><img ></img><p>Like</p></div>
                        <div><img ></img><p>Like</p></div>
                        <div><img ></img><p>Like</p></div>
                        <div><img ></img><p>Like</p></div>
                        <div><img ></img><p>Like</p></div>
                        <div><img ></img><p>Like</p></div>
                        <div><img ></img><p>Like</p></div>
                        <div><img ></img><p>Like</p></div>

                        


                    </div>
                    }
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