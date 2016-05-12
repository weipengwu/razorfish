
			var Postwidget = React.createClass({
                getInitialState: function() {
                    return {
                      
                    };
                  },

                  componentDidMount: function() {
                    this.serverRequest = $.get(this.props.source, function (result) {
                      this.setState({
                        name: result.name,
                        desc: result.desc,
                        banner: result.banner,
                        profileimg: result.profileimg,
                        read: result.read,
                        comments: result.comments,
                        likes: result.likes
                      });
                    }.bind(this));
                  },

                  componentWillUnmount: function() {
                    this.serverRequest.abort();
                  },

                render: function() {
                    return (
                        <div>
                            <div className="topbanner" style={{ backgroundImage: 'url('+this.state.banner+')' }}></div>
                            <div className="widgetbody">
                                <div className="side">
                                    <div className="imagewrapper">
                                        <div className="profileimage" style={{ backgroundImage: 'url('+this.state.profileimg+')' }}></div>
                                    </div>
                                </div>
                                <div className="content">
                                    <h2>{this.state.name}</h2>
                                    <p>{this.state.desc}</p>
                                </div>
                            </div>
                            <div className="widgetfooter">
                                <div className="col-md-4 col-sm-4 col-xs-4">
                                    <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> {this.state.read}</a>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-4">
                                    <a href="#"><i className="fa fa-comment" aria-hidden="true"></i> {this.state.comments}</a>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-4">
                                    <a href="#"><i className="fa fa-heart" aria-hidden="true"></i> {this.state.likes}</a>
                                </div>
                            </div>
                        </div>
                       
                    );
                }
            })

            ReactDOM.render(<Postwidget source="http://weipengwu.github.io/razorfish/js/post.json"/>, document.getElementById('postwidget'));