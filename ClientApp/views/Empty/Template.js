import React, { Component } from 'react'
export default class Template extends Component {


    articleContainer() {
        let array = [];
        const articleArray = [
            <p>急報著畫種選快高收不體中發器中風成、說是傳告？話飯一中獨，我離回當、己最都無字種？經雙不子依、流可竟沒年度一力，進靜落的平於可以，著個放一了便常可，他保解不，身爾相色來新生直雜到前路人看我是主客才坐；服金又留黃。高天們，重男女站都技讀，問了合聲水因馬在然使大紅率了，之接喜態散開時花魚地可話不為是。的愛生變引過族省？裡以值下會多德知造的行喜童成興念情聞特他的議時及故一己，大基。</p>
            , <p>評向錯持道苦兩整：很知個了麼出你大易大影果然實團性。開人興然不想頭果。子得女特其性，裡覺生己個目新響定、時門研生，近人須：要機論訴因的國好大開路。背到外有或自與，面可布利文說！</p>
            , <p>獎們義會負打現，象關當不著可地不加用四年人告！人自化真過小現文集造投解應現始來果價如第性手件；會這屋海天都者職引麼見題度顧失；家師任院樂家！文國論己術就，通奇馬，怎始增國亮取方言切當滿機房神女後那，學的出益地她山無專自，裡手必參如民得要冷中，業雨國本前生，統濟發媽不急知行。別由神反建可下在遊！好笑好民背笑東印一機親人示她？</p>
        ];



        for (var i = 0; i < 11; i++) {
            array.push(articleArray[i % 3]);

        }

        return array;
    }



    product() {
        let array = [];

        for (var i = 0; i < 10; i++) {
            array.push(
                <div className="product">
                    {i}
                </div>
            );

        }

        return array;
    }



    product2() {
        let array = [];

        for (var i = 0; i < 15; i++) {
            array.push(
                <div className="product2">
                    {i}
                </div>
            );

        }

        return array;
    }



    render() {
        return (
            <div>
                <header id='header'>
                    <div className="mycontainer">
                        <div className='logo'>Logo</div>

                        <form className='search'>
                            <label className='icon-search' for='search'></label>
                            <input type='search' id='search' name='search' value='' />
                        </form>
                        <div className='avatar'>
                            <img src='image/user.jpg' />
                        </div>
                    </div>
                </header>

                <h1>20171002切版及RWD練習</h1>
                <article id='article'>
                    <div className="mycontainer">
                        {this.articleContainer()}

                    </div>
                </article>

                <div id="products">
                    <div className="mycontainer">
                        {this.product()}
                    </div>
                </div>
               
               
                <div id="products2">
                    <div className="mycontainer">
                        {this.product2()}
                    </div>
                </div>

            </div>
        )
    }
}