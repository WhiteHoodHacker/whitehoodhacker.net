import React from "react"

export default class SubscribeForm extends React.Component {
    render() {
        return(
            <div className="my-3" id="mc_embed_signup">
                <form action="https://gmail.us5.list-manage.com/subscribe/post?u=602886b7ffa91c629bc8d12a5&amp;id=3774b743fb" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="form-inline" target="_blank" novalidate>
                    <div id="mc_embed_signup_scroll" className="form-group">
                        <label htmlFor="mce-EMAIL">Join my mailing list!</label>
                        <br />
                        <div className="row">
                            <div className="col-6">
                                <input type="email" defaultValue="" name="EMAIL" className="form-control" id="mce-EMAIL" placeholder="hello@example.com" required />
                                <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true"><input type="text" name="b_602886b7ffa91c629bc8d12a5_3774b743fb" tabindex="-1" value="" /></div>
                            </div>
                            <div className="col p-0">
                                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="btn main-btn-primary" />
                            </div>
                        </div>
                        <small><em>You will only be notified of new posts. I don't spam.</em></small>
                    </div>
                </form>
            </div>
        )
    }
}