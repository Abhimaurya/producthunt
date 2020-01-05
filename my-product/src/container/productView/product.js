import React, { Component } from 'react';
import Calendar from 'react-calendar';
class ProductView extends Component {
    constructor(props) {
        super(props);
        //Initialise the state -->
        this.state = {
            visible: false,
            isLoading: true,
            image: [],
            bgColor: "white",
            date: new Date(),
            dateupdate: "",
            stateupdate: true,
            particualrDateimage: [],
            active: null,
            LikedProduct: [],
            noimage:false,
            greaterdate:false,

        }

    }
    //Life cycle call to fetch API-->
    componentDidMount() {
        //to fetch current date API to render on screen
        this.fetchimage(); 
        //to fecth passed date API to render on screen
        this.fetchupdateimage();
    }
    //for fetching image API on load render
    fetchimage() {
        //formatting into today date-->
        let todaydate=this.state.date.toISOString().slice(0,10)
        //fetch api with today date-->
        fetch('https://api.producthunt.com/v1/posts?day='+todaydate+'&access_token=ec6K_AQNMuru2NyK819R1M3DEsLwKUGR4S87Wphusp0')
            .then(response => response.json())
            .then(data =>

                this.setState({
                    greaterdate: true,
                    image: data.posts,

                })

            )
    }
    //for fetching image API on date selected product render
    fetchupdateimage(d) {
        console.log("before1", d);
        var t = 'https://api.producthunt.com/v1/posts?day=' + d + '&access_token=ec6K_AQNMuru2NyK819R1M3DEsLwKUGR4S87Wphusp0'
        fetch('https://api.producthunt.com/v1/posts?day=' + d + '&access_token=ec6K_AQNMuru2NyK819R1M3DEsLwKUGR4S87Wphusp0')
            .then(response => response.json())
            .then(data =>

                this.setState({
                    isLoading: false,
                    particualrDateimage: data.posts,

                })

            )
        console.log("before2", t);
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
    //selecting date and passing to method for API call-->
    onChange = date => {
        this.setState({ stateupdate: false, date: date }, () => {
            let datestr = this.state.date;
            //format date as we are getting different format of date-->
            var formatdate = new Date(datestr),
                month = '' + (formatdate.getMonth() + 1),
                day = '' + formatdate.getDate(),
                year = formatdate.getFullYear();

            if (month.length < 2)
                month = '0' + month;
            if (day.length < 2)
                day = '0' + day;

            let d = [year, month, day].join('-');
            console.log("date", d);
            //called function and pass parameter of formatted date-->
            
            this.fetchupdateimage(d);
        });
    }
    //Change color of like button toggle movement-->
    chngcolor = (position, d) => {
        this.setState({
            noimage: true
        })
        console.log("immediate",d);
        //store in variable array for further rendering in liked product-->
        let Likedproduct = d.makers[0] ?
            d.makers[0].image_url['original'] :
            "https://ph-avatars.imgix.net/566629/original?auto=format&fit=crop&crop=faces&w=original&h=original)";
        //pushing into array-->
        this.state.LikedProduct.push(Likedproduct);
        console.log("afterpush", this.state.LikedProduct);
        //checking for current statu sof button-->
        if (this.state.active === position) {
            this.setState({ active: null })
        } else {
            this.setState({ active: position })
        }
    }
    //changing button color-->
    mycolor = (position) => {
        if (this.state.active === position) {
            return "#c9cf78";
        }
        return "";
    }
   
    //rendering part start-->
    render() {
        // console.log("current date",this.state.date.toISOString().slice(0,10)<);
        console.log('image', this.state.image);
        console.log("particularimage", this.state.particualrDateimage);
        return (

            <React.Fragment>
                <div class="wrap">
                    <div class="date-picker">
                        <button class="btn" onClick={this.sendback}>Filter Post via Date</button>

                        <div class="date-detector">
                            {!this.state.visible ?
                                <p>Please click above button to filter via date</p> :
                                //calender component of React called here-->
                                <Calendar
                                    onChange={this.onChange}
                                    value={this.state.date}
                                />}
                        </div>
                    </div>
                      {/* Initial checking for rendering the product  */}
                    {this.state.isLoading ?
                        <div className="loading">Loading...</div> :
                        <div className="product">
                        {/*if loading gets false it will render this section  */}
                            {this.state.stateupdate ?
                                this.state.image.map((image, index, array) => (
                                    <div>
                                        <a href={image.discussion_url}>
                                            {/* Checking for the whether the image array available or not */}
                                            <img src={image.makers[0] ?
                                                image.makers[0].image_url['original'] :
                                                'https://ph-avatars.imgix.net/566629/original?auto=format&fit=crop&crop=faces&w=original&h=original'}>
                                            </img>
                                        </a>
                                        {/* change color trigger goes jere */}
                                        <p onClick={() => { this.chngcolor(index, image) }} style={{ backgroundColor: this.mycolor(index) }}>Like</p>
                                    </div>
                                )) :
                                // Rendering for the product on chnage of date by selecting via calender
                                this.state.greaterdate?
                                this.state.particualrDateimage.map((image, index, array) => (
                                    <div>
                                        {/* checking for iage is available or not */}
                                        <a href={image.discussion_url}>
                                        <img src={image.makers[0] ?
                                            image.makers[0].image_url['original'] :
                                            'https://ph-avatars.imgix.net/566629/original?auto=format&fit=crop&crop=faces&w=original&h=original'}>
                                        </img>
                                        </a>
                                        {/* change of button color */}
                                        <p onClick={() => { this.chngcolor(index, image) }} style={{ backgroundColor: this.mycolor(index)}}>Like</p>
                                    </div>
                                ))
                                :
                                <div>not render</div>

                            }
                        </div>
                    }
                    {/* Like section -Product liked by person */}
                    <div class="likesection">
                        <p>Liked product by user</p>
                        <React.Fragment>
                            {/* checking if no like has been done */}
                            {this.state.noimage?
                            this.state.LikedProduct.map((LikedProduct, index, array) => (
                                <div>
                                    {/* rendering of image when user like the product */}
                                    <img className="zoom" src={LikedProduct}
                                    >
                                </img>
                                </div>

                            )):
                            // when no like has been done by user-->
                            <div className="noproduct">Give a like to see here !</div>}

                        </React.Fragment>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ProductView;