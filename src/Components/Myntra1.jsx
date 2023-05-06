import style from "./myntra1.module.css";
import myntralogo from "./photos/logo.png";
import bag from "./photos/bag.png";
import front1 from "./photos/front1.png";
import crazy from "./photos/crazy.png";
import front2 from "./photos/front2.png";
import front3 from "./photos/front3.png";
import front4 from "./photos/front4.png";
import front5 from "./photos/front5.png";
import front6 from "./photos/front6.png";
import front7 from "./photos/front7.png";
import front8 from "./photos/front8.png";
import front9 from "./photos/front9.png";
import front10 from "./photos/front10.png";
import gp from "./photos/gp.png";
import as from "./photos/as.png";
import face from "./photos/face.png";
import twit from "./photos/twit.png";
import you from "./photos/you.png";
import inst from "./photos/inst.png";
import org from "./photos/org.png";
import thirty from "./photos/thirty.png";

const Myntra1 = () => {
  return (
    <div>
      <section id={style.nav}>
        <article className={style.side2}>
          <div className={style.logo}>
            <img src={myntralogo} alt="" />
          </div>
          <div className={style.menu}>
            <ol>
              <li>
                <a className={style.a1} href="">
                  MEN
                </a>
              </li>
              <li>
                <a href="">WOMEN</a>
              </li>
              <li>
                <a href="">KIDS</a>
              </li>
              <li>
                <a href="">HOME & LIVING</a>
              </li>
              <li>
                <a href="">BEAUTY</a>
              </li>
              <li>
                <a href="">
                  STUDIO <sup>NEW</sup>
                </a>
              </li>
            </ol>
          </div>
          <div className={style.search}>
            <div>
              <div className={style.searchicon}>
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
              <div className={style.searchbar}>
                <input
                  type="text"
                  placeholder="Search for products, brands and more"
                />
              </div>
            </div>
          </div>
          <div className={style.icon}>
            <div>
              <i class="fa-regular fa-user fa-lg"></i>
              <br /> <span> Profile</span>
            </div>
            <div>
              <a href="">
                <i class="fa-regular fa-heart fa-xl"></i>
                <span>Wishlist</span>
              </a>
            </div>
            <div>
              <a href="">
                <img src={bag} alt="" />
                <span className={style.bag1}>Bag</span>
              </a>
            </div>
          </div>
        </article>
      </section>
      <section id={style.homepage1}>
        <article>
          <div className={style.p1}>
            <a href="#">
              <img src={front1} alt="" />
              <br />
              <center>
                <img src={crazy} alt="" />
              </center>
            </a>
          </div>
          <div className={style.p2}>
            <a href="#">
              <img src={front2} alt="" />
            </a>
          </div>
          <div className={style.p3}>
            <a href="#">
              <center>
                <img src={front3} alt="" />
              </center>
            </a>
          </div>
          <div className={style.p4}>
            <a href="#">
              <img src={front4} alt="" />
            </a>
          </div>
          <div className={style.p5}>
            <a href="#">
              <center>
                <img src={front5} alt="" />
              </center>
            </a>
          </div>
          <div className={style.p6}>
            <a href="#">
              <img src={front6} alt="" />
            </a>
          </div>
          <div className={style.p7}>
            <a href="#">
              <center>
                <img src={front7} alt="" />
              </center>
            </a>
          </div>
          <div className={style.p8}>
            <a href="#">
              <img src={front8} alt="" />
            </a>
          </div>
          <div className={style.p9}>
            <a href="#">
              <img src={front9} alt="" />
            </a>
          </div>
          <div className={style.p10}>
            <a href="#">
              <img src={front10} alt="" />
            </a>
          </div>
        </article>
      </section>
      <section id={style.footer}>
        <article>
          <div className={style.footer1}>
            <div className={style.line1}>
              <ol>
                <li>
                  <a href="">
                    <strong className={style.mainhead}>ONLINE SHOPPING</strong>
                  </a>
                </li>
                <br />
                <li>
                  <a href="">Men</a>
                </li>
                <li>
                  <a href="">Women</a>
                </li>
                <li>
                  <a href="">Kids</a>
                </li>
                <li>
                  <a href="">Home & Living</a>
                </li>
                <li>
                  <a href="">Beauty</a>
                </li>
                <li>
                  <a href="">Gift Cards</a>
                </li>
                <li>
                  <a href=""> Myntra Insider</a>
                </li>
                <br />
                <li>
                  <strong className={style.mainhead}>USEFUL LINKS</strong>
                </li>
                <br />
                <li>
                  <a href="">Blogs</a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
                <li>
                  <a href="">Site Map</a>
                </li>
                <li>
                  <a href="">Corporate Information</a>
                </li>
                <li>
                  <a href="">Whitehat</a>
                </li>
              </ol>
            </div>
            <div className={style.line2}>
              <ol>
                <li>
                  <strong className={style.mainhead}>CUSTOMER POLICIES</strong>
                </li>
                <br />
                <li>
                  <a href="">Contact Us</a>
                </li>
                <li>
                  <a href="">FAQ</a>
                </li>
                <li>
                  <a href="">TAQ</a>
                </li>
                <li>
                  <a href="">Terms Of Use</a>
                </li>
                <li>
                  <a href="">Track Orders</a>
                </li>
                <li>
                  <a href="">Shipping</a>
                </li>
                <li>
                  <a href="">Cancellation</a>
                </li>
                <li>
                  <a href="">Returns</a>
                </li>
                <li>
                  <a href="">Privacy policy</a>
                </li>
                <li>
                  <a href="">Grievance Officer</a>
                </li>
              </ol>
            </div>
            <div className={style.line3}>
              <ol>
                <li>
                  <strong className={style.mainhead}>
                    EXPERIENCE MYNTRA APP ON MOBILE
                  </strong>
                </li>
                <br />
                <li>
                  <a href="">
                    <img src={gp} alt="" className={style.apps1} />
                    <img src={as} alt="" className={style.apps2} />
                  </a>
                </li>
                <br />
                <li>
                  <strong className={style.mainhead}>KEEP IN TOUCH</strong>
                </li>
                <br />
                <li className={style.apps}>
                  <a href="">
                    <img src={face} alt="" className={style.app1} />
                  </a>
                  <a href="">
                    <img src={twit} alt="" className={style.app1} />
                  </a>
                  <a href="">
                    <img src={you} alt="" className={style.app1} />
                  </a>
                  <a href="">
                    <img src={inst} alt="" className={style.app1} />
                  </a>
                </li>
              </ol>
            </div>
            <div className={style.line4}>
              <ol>
                <li>
                  <img src={org} alt="" className={style.org} />{" "}
                  <p>
                    <strong> 100% ORIGINAL </strong> guarantee for <br /> all
                    products at myntra.com
                  </p>
                </li>
                <br />
                <li>
                  <img src={thirty} alt="" className={style.thir} />
                  <p>
                    {" "}
                    <strong> Return within 30days </strong> of <br /> receiving
                    your order
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div className={style.footer2}>
            <div>
              <form action="">
                <fieldset>
                  <legend> POPULAR SEARCHES</legend>
                  <div className={style.data1}>
                    <a href="">
                      Makeup | Dresses For Girls | T-Shirts | Sandals |
                      Headphones | Babydolls | Blazers For Men | Handbags |
                      Ladies Watches | Bags | Sport Shoes | Reebok Shoes | Puma
                      Shoes | Boxers | Wallets | Tops | Earrings | Fastrack
                      Watches | Kurtis | Nike | Smart Watches | Titan Watches |
                      Designer Blouse | Gowns | Rings | Cricket Shoes | Forever
                      21 | Eye Makeup | Photo Frames | Punjabi Suits | Bikini |
                      Myntra Fashion Show | Lipstick | Saree | Watches | Dresses
                      | Lehenga | Nike Shoes | Goggles | Bras | Suit | Chinos |
                      Shoes | Adidas Shoes | Woodland Shoes | Jewellery |
                      Designers Sarees
                    </a>
                  </div>
                  <div className={style.data2}>
                    <div>
                      In case of any concern,{" "}
                      <a href="">
                        <span> Contact Us</span>
                      </a>
                    </div>
                    <div>© 2023 www.myntra.com. All rights reserved.</div>
                  </div>
                </fieldset>
              </form>
            </div>
            <div className={style.address}>
              <div className={style.add}>
                <ol>
                  <li className={style.reg}>Registered Office Address</li>
                  <li>Buildings Alyssa,</li>
                  <li>Begonia and Clover situated in Embassy Tech Village,</li>
                  <li>Outer Ring Road,</li>
                  <li>Devarabeesanahalli Village,</li>
                  <li>Varthur Hobli,</li>
                  <li>Bengaluru – 560103, India</li>
                </ol>
              </div>
              <div className={style.cin}>
                <ol>
                  <li>CIN: U72300KA2007PTC041799</li>
                  <li>
                    Telephone:{" "}
                    <a href="" className={style.num}>
                      +91-80-61561999
                    </a>
                  </li>
                </ol>
              </div>
            </div>
            <fieldset className={style.strightline}></fieldset>
            <div className={style.matter}>
              <div className={style.para1}>
                <p> ONLINE SHOPPING MADE EASY AT MYNTRA </p>
                If you would like to experience the best of online shopping for
                men, women and kids in India, you are at the right place. Myntra
                is the ultimate destination for fashion and lifestyle, being
                host to a wide array of merchandise including clothing,
                footwear, accessories, jewellery, personal care products and
                more. It is time to redefine your style statement with our
                treasure-trove of trendy items. Our online store brings you the
                latest in designer products straight out of fashion houses. You
                can shop online at Myntra from the comfort of your home and get
                your favourites delivered right to your doorstep.
              </div>
              <div className={style.para2}>
                <p>BEST ONLINE SHOPPING SITE IN INDIA FOR FASHION</p>
                Be it clothing, footwear or accessories, Myntra offers you the
                ideal combination of fashion and functionality for men, women
                and kids. You will realise that the sky is the limit when it
                comes to the types of outfits that you can purchase for
                different occasions.
                <ol>
                  <li>
                    <span> Smart men’s clothing </span>- At Myntra you will find
                    myriad options in smart formal shirts and trousers, cool
                    T-shirts and jeans, or kurta and pyjama combinations for
                    men. Wear your attitude with printed T-shirts. Create the
                    back-to-campus vibe with varsity T-shirts and distressed
                    jeans. Be it gingham, buffalo, or window-pane style, checked
                    shirts are unbeatably smart. Team them up with chinos,
                    cuffed jeans or cropped trousers for a smart casual look.
                    Opt for a stylish layered look with biker jackets. Head out
                    in cloudy weather with courage in water-resistant jackets.
                    Browse through our innerwear section to find supportive
                    garments which would keep you confident in any outfit.
                  </li>
                  <li>
                    <span> Trendy women’s clothing </span>- Online shopping for
                    women at Myntra is a mood-elevating experience. Look hip and
                    stay comfortable with chinos and printed shorts this summer.
                    Look hot on your date dressed in a little black dress, or
                    opt for red dresses for a sassy vibe. Striped dresses and
                    T-shirts represent the classic spirit of nautical fashion.
                    Choose your favourites from among Bardot, off-shoulder,
                    shirt-style, blouson, embroidered and peplum tops, to name a
                    few. Team them up with skinny-fit jeans, skirts or palazzos.
                    Kurtis and jeans make the perfect fusion-wear combination
                    for the cool urbanite. Our grand sarees and lehenga-choli
                    selections are perfect to make an impression at big social
                    events such as weddings. Our salwar-kameez sets, kurtas and
                    Patiala suits make comfortable options for regular wear.
                  </li>
                  <li>
                    <span> Fashionable footwear </span>- While clothes maketh
                    the man, the type of footwear you wear reflects your
                    personality. We bring you an exhaustive lineup of options in
                    casual shoes for men, such as sneakers and loafers. Make a
                    power statement at work dressed in brogues and oxfords.
                    Practice for your marathon with running shoes for men and
                    women. Choose shoes for individual games such as tennis,
                    football, basketball, and the like. Or step into the casual
                    style and comfort offered by sandals, sliders, and
                    flip-flops. Explore our lineup of fashionable footwear for
                    ladies, including pumps, heeled boots, wedge-heels, and
                    pencil-heels. Or enjoy the best of comfort and style with
                    embellished and metallic flats.
                  </li>
                  <li>
                    <span> Stylish accessories </span>- Myntra is one of the
                    best online shopping sites for classy accessories that
                    perfectly complement your outfits. You can select smart
                    analogue or digital watches and match them up with belts and
                    ties. Pick up spacious bags, backpacks, and wallets to store
                    your essentials in style. Whether you prefer minimal
                    jewellery or grand and sparkling pieces, our online
                    jewellery collection offers you many impressive options.
                  </li>
                  <li>
                    <span> Fun and frolic </span>- Online shopping for kids at
                    Myntra is a complete joy. Your little princess is going to
                    love the wide variety of pretty dresses, ballerina shoes,
                    headbands and clips. Delight your son by picking up sports
                    shoes, superhero T-shirts, football jerseys and much more
                    from our online store. Check out our lineup of toys with
                    which you can create memories to cherish.
                  </li>
                  <li>
                    <span> Beauty begins here </span>- You can also refresh,
                    rejuvenate and reveal beautiful skin with personal care,
                    beauty and grooming products from Myntra. Our soaps, shower
                    gels, skin care creams, lotions and other ayurvedic products
                    are specially formulated to reduce the effect of aging and
                    offer the ideal cleansing experience. Keep your scalp clean
                    and your hair uber-stylish with shampoos and hair care
                    products. Choose makeup to enhance your natural beauty.
                  </li>
                </ol>
                Myntra is one of the best online shopping sites in India which
                could help transform your living spaces completely. Add colour
                and personality to your bedrooms with bed linen and curtains.
                Use smart tableware to impress your guest. Wall decor, clocks,
                photo frames and artificial plants are sure to breathe life into
                any corner of your home.
              </div>
              <div className={style.para3}>
                <p>AFFORDABLE FASHION AT YOUR FINGERTIPS </p> Myntra is one of
                the unique online shopping sites in India where fashion is
                accessible to all. Check out our new arrivals to view the latest
                designer clothing, footwear and accessories in the market. You
                can get your hands on the trendiest style every season in
                western wear. You can also avail the best of ethnic fashion
                during all Indian festive occasions. You are sure to be
                impressed with our seasonal discounts on footwear, trousers,
                shirts, backpacks and more. The end-of-season sale is the
                ultimate experience when fashion gets unbelievably affordable.
              </div>
              <div className={style.para4}>
                <p className={style.in}> MYNTRA INSIDER </p>{" "}
                <p>
                  Every online shopping experience is precious. Hence, a
                  cashless reward-based customer loyalty program called Myntra
                  Insider was introduced to enhance your online experience. The
                  program is applicable to every registered customer and
                  measures rewards in the form of Insider Points.
                </p>{" "}
                <p>
                  {" "}
                  There are four levels to achieve in the program, as the
                  Insider Points accumulate. They are - Insider, Select, Elite
                  or Icon. Apart from offering discounts on Myntra and partner
                  platform coupons, each tier comes with its own special perks.
                </p>
                <p className={style.inside}>Insider</p>
                <ul>
                  <li>
                    Opportunity to master any domain in fashion with tips from
                    celebrity stylists at Myntra Masterclass sessions.
                  </li>
                  <li>Curated collections from celeb stylists</li>
                </ul>
                <p className={style.inside}>Elite</p>
                <ul>
                  <li>
                    VIP access to special sale events such as the End of Reason
                    Sale (EORS) and product launches.
                  </li>
                  <li>Exclusive early access to Limited Edition products</li>
                </ul>
                <p className={style.inside}>Icon</p>
                <ul>
                  <li>Chance to get on guest lists for special events.</li>
                </ul>
              </div>
              <div className={style.para5}>
                <p className={style.studio}>
                  Myntra Studio - The Personalised Fashion Feed You Wouldn’t
                  Want To Miss Out On
                </p>
                <p>
                  The world wide web is evolving at a relentless pace, and with
                  an accelerated growth each passing year, there is bound to be
                  an overwhelming surge of online content. It was for this very
                  reason that personalisation of search feeds was proposed as a
                  solution to combat the overload of irrelevant information.
                </p>

                <p>
                  Several social media platforms such as Facebook and Instagram
                  along with various online shopping websites have chosen to
                  help filter content, increasing user engagement, retention and
                  customer loyalty.
                </p>

                <p>
                  Myntra is one such online shopping website that joins the list
                  of platforms that help curate a personalised fashion feed.
                  Named theMyntra Studio, this personalised search feed brings
                  you the latest men and women’s fashion trends, celebrity
                  styles, branded content and daily updates from your favourite
                  fashion labels.
                </p>

                <p>
                  If you are wondering how impactful Myntra Studio can be, we
                  are listing out five perks of having a rich, meaningful, and
                  personalised fashion feed in your life.
                </p>
                <div>
                  <ol>
                    <li>
                      <p className={style.keep}>
                        Keep Up With What Your Favourite Fashion Icons Are Upto
                      </p>
                      <p>
                        The #OOTD, AKA outfit of the day hashtag trend has been
                        a rage among fashion bloggers and stylists. The whole
                        concept of building an outfit from scratch and
                        showcasing it to a huge community of enthusiasts using
                        the hashtag has helped individuals with understanding
                        trends and making suitable for daily wear.
                      </p>

                      <p>
                        Imagine if you could keep up with every piece of
                        clothing and accessory worn by the fashion icons you
                        look upto. From Sonam Kapoor to Hailey Baldwin Bieber,
                        Myntra Studio has a ‘Stories’ feature to help track
                        celebrity fashion trends, exploring details such as
                        their outfit of the day. This way, you would not ever
                        miss out on the latest celebrity fashion trends, from
                        all around the world.
                      </p>
                    </li>
                    <li>
                      <p className={style.keep}>
                        {" "}
                        Quick Fashion Tip And Tricks{" "}
                      </p>
                      <p>
                        Whether it is draping a saree into a dhoti style,
                        wearing the right lingerie under certain dresses or
                        discovering multiple uses out of heavy ethnic wear,
                        Myntra Studio will help you acquire some unique and
                        useful fashion hacks. Each hack is designed with the
                        intention to help you get the best wear out of
                        everything in your wardrobe.
                      </p>
                    </li>
                    <li>
                      <p className={style.keep}>
                        Updates on What Is Trending and New Product Launches
                      </p>
                      <p>
                        Since fast fashion seems to be extremely hard to keep up
                        with these days, a quick update on what is trending in
                        accessories, clothing and footwear would certainly be of
                        great help. Myntra Studio helps you stay connected to
                        the most beloved and sought after brands such as Puma,
                        Coverstory, The Label Life and so many more.
                      </p>

                      <p>
                        Your feed keeps you updated with stories of what the
                        brands are creating including clothing, footwear and
                        jewellery, along with their new seasonal collections.
                      </p>
                    </li>
                    <li>
                      <p className={style.keep}>
                        Explicit Step-By-Step Beauty Routines From Experts
                      </p>
                      <p>
                        Just like fashion, the beauty community keeps on
                        growing, and with brands such as Huda Beauty, MAC and
                        the latest Kay Beauty by Katrina Kaif, are constantly
                        coming up with mind-blowing products. Whether it is
                        creating a no-makeup look, different winged eyeliners,
                        do-it-yourself facial masks and other personal care
                        beauty routines, Myntra Studio is here for you.
                      </p>
                    </li>
                    <li>
                      <p className={style.keep}>
                        {" "}
                        Celebrity Confessions And A Look Into Their Lives
                      </p>
                      <p>
                        A bonus feature that Myntra Studio has in store for you
                        is celebrity confessions and a peek into their lives.
                        So, Myntra helps you stay connected to your most beloved
                        celebrities in a matter of clicks.
                      </p>

                      <p>
                        If you are very particular when it comes to the content
                        you wish to view and engage with on social media, the
                        ability to intricately filter content helps achieve
                        that. Applying the same formula for hardcore fashion
                        lovers and shoppers, Myntra Studio brings you a daily
                        fashion fix incorporating everything that you love, all
                        at one place. Sign up on Myntra today and start
                        organising your fashion feed, just the way you want to.
                      </p>
                    </li>
                  </ol>
                </div>
              </div>
              <div className={style.para6}>
                <p className={style.myntraa}> MYNTRA APP</p>
                <p>
                  Myntra, India’s no. 1 online fashion destination justifies its
                  fashion relevance by bringing something new and chic to the
                  table on the daily. Fashion trends seem to change at lightning
                  speed, yet the Myntra shopping app has managed to keep up
                  without any hiccups. In addition, Myntra has vowed to serve
                  customers to the best of its ability by introducing its
                  first-ever loyalty program, The Myntra Insider. Gain access to
                  priority delivery, early sales, lucrative deals and other
                  special perks on all your shopping with the Myntra app.
                  Download the Myntra app on your Android or IOS device today
                  and experience shopping like never before!
                </p>
                <p className={style.myntraa}> HISTORY OF MYNTRA</p>
                <p>
                  Becoming India’s no. 1 fashion destination is not an easy
                  feat. Sincere efforts, digital enhancements and a team of
                  dedicated personnel with an equally loyal customer base have
                  made Myntra the online platform that it is today. The original
                  B2B venture for personalized gifts was conceived in 2007 but
                  transitioned into a full-fledged ecommerce giant within a span
                  of just a few years. By 2012, Myntra had introduced 350 Indian
                  and international brands to its platform, and this has only
                  grown in number each passing year. Today Myntra sits on top of
                  the online fashion game with an astounding social media
                  following, a loyalty program dedicated to its customers, and
                  tempting, hard-to-say-no-to deals.
                </p>

                <p>
                  The Myntra shopping app came into existence in the year 2015
                  to further encourage customers’ shopping sprees. Download the
                  app on your Android or IOS device this very minute to
                  experience fashion like never before
                </p>
                <p className={style.myntraa}>SHOP ONLINE AT MYNTRA WITH COMPLETE CONVENIENCE</p>
                <p>
                  Another reason why Myntra is the best of all online stores is
                  the complete convenience that it offers. You can view your
                  favourite brands with price options for different products in
                  one place. A user-friendly interface will guide you through
                  your selection process. Comprehensive size charts, product
                  information and high-resolution images help you make the best
                  buying decisions. You also have the freedom to choose your
                  payment options, be it card or cash-on-delivery. The 30-day
                  returns policy gives you more power as a buyer. Additionally,
                  the try-and-buy option for select products takes
                  customer-friendliness to the next level.
                </p>

                <p>
                  Enjoy the hassle-free experience as you shop comfortably from
                  your home or your workplace. You can also shop for your
                  friends, family and loved-ones and avail our gift services for
                  special occasions.
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Myntra1;
