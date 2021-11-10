const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const APP_STORAGE_KEY = 'CART_SELECTED'

const productDemoList = $('.product__demo-color-list')
const productDemoColorCover = $('.product__demo-color-cover')
const sectorDog = $('.product__detail-dog-option')
const sectorDogListImg = $('.product__detail-dog-list-imgs')
const colorList = $('.product__detail-color-box')
const imgSlideShow = $('.product__demo-img-slide')
const sectorShirtCover = $$('.product__detail-style-img-item')
const lenghtName = $('.name-dog__lenght')
const arrowsArt = $$('.product__detail-cart-quantity-arrow')
const cartNumber = $('.product__detail-cart-quantity-number')
const priceNew = $('.product__detail-price--new')
const priceOld = $('.price--old')
const sectorDogHeader = $('.sector-dog')
const modal1 = $('.modal-1')
const imgPreview = $('.preview__shirt-img')
const modalClose = $('.modal__close')
const modalBody = $('.modal__body1')
const currentCartProper = $$('.current__cart-option-placeholder')
const currentCartStyle = $('.list-style')
const currentCartOptionList = $$('.current__cart-option-list')
const currentCartArrow = $$('.current__cart-option-arrow')
const currentCartListColor = $('.list-color')
const currentCartPriceNew = $('.current__cart-detail-price--new')
const currentCartPriceOld = $('.current__cart-detail-price--old')
const savePricePercent = $('.save-percent')
const currentCartQuantityVariability = $$('.current__cart-quantity-variability')
const currentCartQuantityCount = $('.current__cart-quantity-count')
const currentCartImg = $('.current__cart-detail-img')
const currentCart = $('.current__cart')
const navbarCartList = $('.navbar__container-option-cart-list')
const navbarCartPay = $('.navbar__container-option-cart-pay')
const countItemCart = $('.navbar__container-option-cart-count')
const navPricePayTotal = $('.navbar__container-option-subtotal-price')
const productBuyTogether = $('.product__detail-bt-detail')
const totalPriceBuyTogether = $('.product__detail-bt-total-price')
const productPersonalizedItems = $('.product__personalized-collection-items')
const productPersonalizedList = $('.product__personalized-collection-list')
const commentName = $('.product__write-input-name')
const commentEmail = $('.product__write-input-email')
const commentContent = $('.product__write-comment-content')
const commentSetValueRecomment = $$('.product__write-recommend-content')
const commentSetSector = $$('.product__write-sector-item-input')
const commentTitle = $('.product__write-input-title')
const commentStar = $$('.rating-star')
const commentRateStarContent = $('.product__write-rating-star-titlte')
const commentCharacterTitle = $('.product__write-title-character')
const commentCharacterContent = $('.product__write-comment-title span')
const commentImgType = ['image/gif', 'image/jpeg', 'image/png', 'image/jpg']
const commentImgWarning = $('.product__write-add-photo-warning')
const commetnImgAddToReview = $('.product__write-add-photo-cover')
const rivewContentItem = $('.product__rate-comment-cover')
const rivewShow = $('.product__write-comment')
const commentWarningName = $('.product__write-add-photo-warning-name')
const commentWarningEmail = $('.product__write-add-photo-warning-email')
const commentSuccess = $('.product__review-completed')
const reviewDate = $('.product__rate-comment-date')
const reviewFillterItem = $$('.product__rate-fillter-item')
const reviewFillterItemQuantity = $$('.product__rate-fillter-item-count')
const reviewEmpty = $('.product__rate-comment-empty')
const reviewExistPhoto = $('.product__rate-fillter-with-photo-checked')
const reviewPercentStar = $$('.rate-percent')
const reviewRateBar = $$('.rate-bar')
const reviewAverageStar = $('.product__rate-overall-num')
const modal2 = $('.modal-2')
const modal2ReviewImg = $('.preview__review-img')



var currentCartOptionItem = $$('.current__cart-option-item')
var colorShirt = $$('.color-box')
var removeItemCart = null
var checkBoxPBT = null
var btnsQuantityCart = null
var cartQuantityCover = null
var cartQuantityNum = null
var btnCloseImg = null


const btnShowImgDog = $('.show-img-dog')
const prevBtnDemoColor = $('.arrow__cover--left')
const nextBtnDemoColor = $('.arrow__cover--right')
const btnAddToCart = $$('.btn-add-cart')
const btnPreview = $('.show-img-dog')
const btnDownLoadPreview = $('.preview__shirt-download')
const btnGoToCart = $('.btn-go-to-cart')
const btnPNCRight = $('.personalized-collection-arrow--right')
const btnPNCLeft = $('.personalized-collection-arrow--left')
const btnSubmitReview = $('.product__write-btn-submit')
const btnUploadImg = $('.product__write-btn-add-photo')
const btnShowWriteReview = $('.btn-write-view')
const btnCloseWriteReivew = $('.product__write-header-close')
const btnCloseModal2 = $('.modal__close2')
const btnArrowReviewLeft = $('.preview__img-arrow--left')
const btnArrowReviewRight = $('.preview__img-arrow--right')


const imgDemoCanvas = $('.product__demo-img-cover')
const imgDemoCanvas2 = $('.product__demo-img-cover2')
const imgDemoCanvas3 = $('.product__demo-img-cover3')
const imgDemoCanvas4 = $('.product__demo-img-cover4')
const ctx = imgDemoCanvas.getContext('2d')
const ctx2 = imgDemoCanvas2.getContext('2d')
const ctx3 = imgDemoCanvas3.getContext('2d')
const ctx4 = imgDemoCanvas4.getContext('2d')
const inputDogName = $('.product__detail-name-input')
const scale = window.devicePixelRatio

const sectorShirt = $$('.product__detail-style-img')
// const colorShirt = $$('.color-box')
const shortShirt = $('.short-shirt')
const longShirt = $('.long-shirt')
const sizeShirt = $$('.size-box')

// console.log(Math.floor(scale));
imgDemoCanvas.width = Math.floor(500 * scale)
imgDemoCanvas.height = Math.floor(625 * scale)
imgDemoCanvas2.width = Math.floor(500 * scale)
imgDemoCanvas2.height = Math.floor(625 * scale)
imgDemoCanvas3.width = Math.floor(500 * scale)
imgDemoCanvas3.height = Math.floor(625 * scale)
imgDemoCanvas4.width = Math.floor(500 * scale)
imgDemoCanvas4.height = Math.floor(625 * scale)

var imgDemo = new Image
var imgDog = new Image
var imgShirtDog = new Image
var imgTextDog = new Image


var priceNewConvert = null
var priceOldConvert = null
var priceSave = 0
var countItem = 0
var totalPrice = 0
var totalPricePBT = 29
var imgQuantity = 0



const app = {
    config: JSON.parse(localStorage.getItem(APP_STORAGE_KEY)) || {},
    setConfig: function(key, value) {
        this.config[key] = value
        localStorage.setItem(APP_STORAGE_KEY, JSON.stringify(this.config))
    },
    loadConfig: function() {
        console.log(app.config.cart1); 
        app.cartSelected.push(app.config.cart1)
    },
    removeConfig: function(key) {
        localStorage.removeItem(APP_STORAGE_KEY)
    },
    isCart: false,
    isAcceptReview: false,
    countText: '',
    currentProduct: {
        color: 'white',
        isShort: true,
        size: 'sizeS',
        priceNew: '$29.00',
        priceOld: '$35.00',
        save: '',
        img: null,
        dogName: null,
    },
    cart: {
        style: null,
        color: null,
        size: null,
        quantity: 1,
        img: null,
        priceNew: null,
        priceOld: null,
        sectorDog: null,
        numDog: '',
        dogName: null,
    },

    cartSelected : [],

    data: {
        imgDemoBackground: null,
        imgDogUrl: null,
        imgDogName: null,
        imgFull: null,
    },

    productsBuyTogether : [
        {
            title: "I Don't Like Morning People - Personalized T-shirt",
            price: 29.00,
        },
        {
            title: "I Have Fibromyalgia, I Don't Have The Energy To Pretend I Like You Today - Personalized T-shirt",
            price: 29.00,
        },
        {
            title: "Autism Mom Life - Personalized T-shirt",
            price: 29.00,
        },
    ],

    products: [
        // white
        {   
            color: 'white',
            short: {
                imgMain: './assets/img/product-main/product-short/1.png',
                imgSub: {
                    img1: './assets/img/product-color/product-short/White/S-White-1.png',
                    img2: './assets/img/product-color/product-short/White/S-White-2.png',
                    img3: './assets/img/product-color/product-short/White/S-White-3.png',
                    img4: './assets/img/product-color/product-short/White/S-White-4.png',
                    img5: './assets/img/product-color/product-short/White/S-White-5.png',
                },
                sizeS: {
                    priceNew: '$29.00',
                    priceOld: '$35.00',
                },
                sizeM: {
                    priceNew: '$29.00',
                    priceOld: '$35.00',
                },
                sizeL: {
                    priceNew: '$29.00',
                    priceOld: '$35.00',
                },
                sizeXL: {
                    priceNew: '$29.00',
                    priceOld: '$35.00',
                },
                size2XL: {
                    priceNew: '$31.00',
                    priceOld: '$37.30',
                },
                size3XL: {
                    priceNew: '$32.00',
                    priceOld: '$38.30',
                },
                size4XL: {
                    priceNew: '$33.00',
                    priceOld: '$39.30',
                },
                size5XL: {
                    priceNew: '$34.00',
                    priceOld: '$40.30',
                },
            },
            long: {
                imgMain: './assets/img/product-main/product-long/1.png',
                imgSub: {
                    img1: './assets/img/product-color/product-long/White/S-White-1.png',
                    img2: './assets/img/product-color/product-long/White/S-White-2.png',
                    img3: './assets/img/product-color/product-long/White/S-White-3.png',
                    img4: './assets/img/product-color/product-long/White/S-White-4.png',
                },
                sizeS: {
                    priceNew: '$36.00',
                    priceOld: '$43.00',
                },
                sizeM: {
                    priceNew: '$36.00',
                    priceOld: '$43.00',
                },
                sizeL: {
                    priceNew: '$36.50',
                    priceOld: '$43.50',
                },
                sizeXL: {
                    priceNew: '$36.50',
                    priceOld: '$43.50',
                },
                size2XL: {
                    priceNew: '$39.00',
                    priceOld: '$46.00',
                },
                size3XL: {
                    priceNew: '$40.50',
                    priceOld: '$47.50',
                },
                size4XL: {
                    priceNew: '$41.00',
                    priceOld: '$48.00',
                },
                size5XL: {
                    priceNew: '$43.00',
                    priceOld: '$50.00',
                },
            },
        },
        // black
        {   
            color: 'black',
            short: {
                imgMain: './assets/img/product-main/product-short/2.png',
                imgSub: {
                    img1: './assets/img/product-color/product-short/Black/S-Black-1.png',
                    img2: './assets/img/product-color/product-short/Black/S-Black-2.png',
                    img3: './assets/img/product-color/product-short/Black/S-Black-3.png',
                    img4: './assets/img/product-color/product-short/Black/S-Black-4.png',
                    img5: './assets/img/product-color/product-short/Black/S-Black-5.png',
                },
                sizeS: {
                    priceNew: '$29.00',
                    priceOld: '$35.00',
                },
                sizeM: {
                    priceNew: '$29.00',
                    priceOld: '$35.00',
                },
                sizeL: {
                    priceNew: '$29.00',
                    priceOld: '$35.00',
                },
                sizeXL: {
                    priceNew: '$29.00',
                    priceOld: '$35.00',
                },
                size2XL: {
                    priceNew: '$32.00',
                    priceOld: '$37.80',
                },
                size3XL: {
                    priceNew: '$33.00',
                    priceOld: '$38.80',
                },
                size4XL: {
                    priceNew: '$34.00',
                    priceOld: '$39.80',
                },
                size5XL: {
                    priceNew: '$35.00',
                    priceOld: '$40.80',
                },
            },
            long: {
                imgMain: './assets/img/product-main/product-long/2.png',
                imgSub: {
                    img1: './assets/img/product-color/product-long/Black/S-Black-1.png',
                    img2: './assets/img/product-color/product-long/Black/S-Black-2.png',
                    img3: './assets/img/product-color/product-long/Black/S-Black-3.png',
                    img4: './assets/img/product-color/product-long/Black/S-Black-4.png',
                },
                sizeS: {
                    priceNew: '$37.00',
                    priceOld: '$44.00',
                },
                sizeM: {
                    priceNew: '$37.50',
                    priceOld: '$44.50',
                },
                sizeL: {
                    priceNew: '$37.50',
                    priceOld: '$44.50',
                },
                sizeXL: {
                    priceNew: '$37.50',
                    priceOld: '$44.50',
                },
                size2XL: {
                    priceNew: '$40.00',
                    priceOld: '$47.00',
                },
                size3XL: {
                    priceNew: '$42.50',
                    priceOld: '$49.50',
                },
                size4XL: {
                    priceNew: '$44.50',
                    priceOld: '$51.50',
                },
                size5XL: {
                    priceNew: '$44.50',
                    priceOld: '$51.50',
                },
            },
        },
        // blue
        {   
            color: 'blue',
            short: {
                imgMain: './assets/img/product-main/product-short/3.png',
                imgSub: {
                    img1: './assets/img/product-color/product-short/Blue/S-Blue-1.png',
                    img2: './assets/img/product-color/product-short/Blue/S-Blue-2.png',
                    img3: './assets/img/product-color/product-short/Blue/S-Blue-3.png',
                    img4: './assets/img/product-color/product-short/Blue/S-Blue-4.png',
                    img5: './assets/img/product-color/product-short/Blue/S-Blue-5.png',
                },
                sizeS: {
                    priceNew: '$29.00',
                    priceOld: '$35.00',
                },
                sizeM: {
                    priceNew: '$29.00',
                    priceOld: '$35.00',
                },
                sizeL: {
                    priceNew: '$29.00',
                    priceOld: '$35.00',
                },
                sizeXL: {
                    priceNew: '$29.00',
                    priceOld: '$35.00',
                },
                size2XL: {
                    priceNew: '$32.00',
                    priceOld: '$37.80',
                },
                size3XL: {
                    priceNew: '$33.00',
                    priceOld: '$38.80',
                },
                size4XL: {
                    priceNew: '$34.00',
                    priceOld: '$39.80',
                },
                size5XL: {
                    priceNew: '$35.00',
                    priceOld: '$40.80',
                },
            },
            long: {
                imgMain: './assets/img/product-main/product-long/3.png',
                imgSub: {
                    img1: './assets/img/product-color/product-long/Blue/S-Blue-1.png',
                    img2: './assets/img/product-color/product-long/Blue/S-Blue-2.png',
                    img3: './assets/img/product-color/product-long/Blue/S-Blue-3.png',
                    img4: './assets/img/product-color/product-long/Blue/S-Blue-4.png',
                },
                sizeS: {
                    priceNew: '$37.00',
                    priceOld: '$44.00',
                },
                sizeM: {
                    priceNew: '$37.00',
                    priceOld: '$44.00',
                },
                sizeL: {
                    priceNew: '$37.50',
                    priceOld: '$44.50',
                },
                sizeXL: {
                    priceNew: '$37.50',
                    priceOld: '$44.50',
                },
                size2XL: {
                    priceNew: '$40.00',
                    priceOld: '$47.00',
                },
                size3XL: {
                    priceNew: '$42.50',
                    priceOld: '$49.50',
                },
                size4XL: {
                    priceNew: '$44.50',
                    priceOld: '$51.50',
                },
                size5XL: {
                    priceNew: '$44.50',
                    priceOld: '$51.50',
                },
            },
        },
        // grey
        {   
            color: 'grey',
            short: {
                imgMain: './assets/img/product-main/product-short/4.png',
                imgSub: {
                    img1: './assets/img/product-color/product-short/Grey/S-Grey-1.png',
                    img2: './assets/img/product-color/product-short/Grey/S-Grey-2.png',
                    img3: './assets/img/product-color/product-short/Grey/S-Grey-3.png',
                    img4: './assets/img/product-color/product-short/Grey/S-Grey-4.png',
                    img5: './assets/img/product-color/product-short/Grey/S-Grey-5.png',
                },
                sizeS: {
                    priceNew: '$29.00',
                    priceOld: '$35.00',
                },
                sizeM: {
                    priceNew: '$29.00',
                    priceOld: '$35.00',
                },
                sizeL: {
                    priceNew: '$29.00',
                    priceOld: '$35.00',
                },
                sizeXL: {
                    priceNew: '$29.00',
                    priceOld: '$35.00',
                },
                size2XL: {
                    priceNew: '$32.00',
                    priceOld: '$37.80',
                },
                size3XL: {
                    priceNew: '$33.00',
                    priceOld: '$38.80',
                },
                size4XL: {
                    priceNew: 'none',
                    priceOld: 'none',
                },
                size5XL: {
                    priceNew: '$35.00',
                    priceOld: '$40.80',
                },
            },
            long: {
                imgMain: './assets/img/product-main/product-long/4.png',
                imgSub: {
                    img1: './assets/img/product-color/product-long/Grey/S-Grey-1.png',
                    img2: './assets/img/product-color/product-long/Grey/S-Grey-2.png',
                    img3: './assets/img/product-color/product-long/Grey/S-Grey-3.png',
                    img4: './assets/img/product-color/product-long/Grey/S-Grey-4.png',
                },
                sizeS: {
                    priceNew: '$37.00',
                    priceOld: '$44.00',
                },
                sizeM: {
                    priceNew: '$37.50',
                    priceOld: '$44.50',
                },
                sizeL: {
                    priceNew: '$37.50',
                    priceOld: '$44.50',
                },
                sizeXL: {
                    priceNew: '$37.50',
                    priceOld: '$44.50',
                },
                size2XL: {
                    priceNew: '$40.00',
                    priceOld: '$47.00',
                },
                size3XL: {
                    priceNew: '$42.00',
                    priceOld: '$49.00',
                },
                size4XL: {
                    priceNew: '$44.50',
                    priceOld: '$51.50',
                },
                size5XL: {
                    priceNew: '$44.50',
                    priceOld: '$51.5',
                },
            },
        },
        // violet
        {   
            color: 'violet',
            short: {
                imgMain: './assets/img/product-main/product-short/5.png',
                imgSub: {
                    img1: './assets/img/product-color/product-short/Violet/S-Violet-1.png',
                    img2: './assets/img/product-color/product-short/Violet/S-Violet-2.png',
                    img3: './assets/img/product-color/product-short/Violet/S-Violet-3.png',
                    img4: './assets/img/product-color/product-short/Violet/S-Violet-4.png',
                    img5: './assets/img/product-color/product-short/Violet/S-Violet-5.png',
                },
                sizeS: {
                    priceNew: '$29.00',
                    priceOld: '$35.00',
                },
                sizeM: {
                    priceNew: '$29.00',
                    priceOld: '$35.00',
                },
                sizeL: {
                    priceNew: '$29.00',
                    priceOld: '$35.00',
                },
                sizeXL: {
                    priceNew: '$29.00',
                    priceOld: '$35.00',
                },
                size2XL: {
                    priceNew: '$31.00',
                    priceOld: '$37.30',
                },
                size3XL: {
                    priceNew: '$32.00',
                    priceOld: '$38.30',
                },
                size4XL: {
                    priceNew: '$33.00',
                    priceOld: '$39.30',
                },
                size5XL: {
                    priceNew: '$34.00',
                    priceOld: '$40.30',
                },
            },
            long: {
                imgMain: 'none',
                imgSub: {
                    img1: 'none',
                    img2: 'none',
                    img3: 'none',
                    img4: 'none',
                },
                sizeS: {
                    priceNew: 'none',
                    priceOld: 'none',
                },
                sizeM: {
                    priceNew: 'none',
                    priceOld: 'none',
                },
                sizeL: {
                    priceNew: 'none',
                    priceOld: 'none',
                },
                sizeXL: {
                    priceNew: 'none',
                    priceOld: 'none',
                },
                size2XL: {
                    priceNew: 'none',
                    priceOld: 'none',
                },
                size3XL: {
                    priceNew: 'none',
                    priceOld: 'none',
                },
                size4XL: {
                    priceNew: 'none',
                    priceOld: 'none',
                },
                size5XL: {
                    priceNew: 'none',
                    priceOld: 'none',
                },
            },
        },
        // red
        {   
            color: 'red',
            short: {
                imgMain: './assets/img/product-main/product-short/6.png',
                imgSub: {
                    img1: './assets/img/product-color/product-short/Red/S-Red-1.png',
                    img2: './assets/img/product-color/product-short/Red/S-Red-2.png',
                    img3: './assets/img/product-color/product-short/Red/S-Red-3.png',
                    img4: './assets/img/product-color/product-short/Red/S-Red-4.png',
                    img5: './assets/img/product-color/product-short/Red/S-Red-5.png',
                },
                sizeS: {
                    priceNew: '$29.00',
                    priceOld: '$35.00',
                },
                sizeM: {
                    priceNew: '$29.00',
                    priceOld: '$35.00',
                },
                sizeL: {
                    priceNew: '$29.00',
                    priceOld: '$35.00',
                },
                sizeXL: {
                    priceNew: '$29.00',
                    priceOld: '$35.00',
                },
                size2XL: {
                    priceNew: '$32.00',
                    priceOld: '$37.80',
                },
                size3XL: {
                    priceNew: '$33.00',
                    priceOld: '$38.80',
                },
                size4XL: {
                    priceNew: '$34.00',
                    priceOld: '$39.80',
                },
                size5XL: {
                    priceNew: '$35.00',
                    priceOld: '$40.80',
                },
            },
            long: {
                imgMain: './assets/img/product-main/product-long/5.png',
                imgSub: {
                    img1: './assets/img/product-color/product-long/Red/S-Red-1.png',
                    img2: './assets/img/product-color/product-long/Red/S-Red-2.png',
                    img3: './assets/img/product-color/product-long/Red/S-Red-3.png',
                    img4: './assets/img/product-color/product-long/Red/S-Red-4.png',
                },
                sizeS: {
                    priceNew: '$37.00',
                    priceOld: '$44.00',
                },
                sizeM: {
                    priceNew: '$37.50',
                    priceOld: '$44.50',
                },
                sizeL: {
                    priceNew: '$37.50',
                    priceOld: '$44.50',
                },
                sizeXL: {
                    priceNew: '$37.50',
                    priceOld: '$44.50',
                },
                size2XL: {
                    priceNew: '$40.00',
                    priceOld: '$47.00',
                },
                size3XL: {
                    priceNew: '$42.00',
                    priceOld: '$49.50',
                },
                size4XL: {
                    priceNew: '$44.50',
                    priceOld: '$51.50',
                },
                size5XL: {
                    priceNew: '$44.50',
                    priceOld: '$51.50',
                },
            },
        },
        // yellow dark
        {   
            color: 'yellow-dark',
            short: {
                imgMain: './assets/img/product-main/product-short/7.png',
                imgSub: {
                    img1: './assets/img/product-color/product-short/YellowDark/S-YellowDark-1.png',
                    img2: './assets/img/product-color/product-short/YellowDark/S-YellowDark-2.png',
                    img3: './assets/img/product-color/product-short/YellowDark/S-YellowDark-3.png',
                    img4: './assets/img/product-color/product-short/YellowDark/S-YellowDark-4.png',
                    img5: './assets/img/product-color/product-short/YellowDark/S-YellowDark-5.png',
                },
                sizeS: {
                    priceNew: '$29.00',
                    priceOld: '$35.00',
                },
                sizeM: {
                    priceNew: '$29.00',
                    priceOld: '$35.00',
                },
                sizeL: {
                    priceNew: '$29.00',
                    priceOld: '$35.00',
                },
                sizeXL: {
                    priceNew: '$29.00',
                    priceOld: '$35.00',
                },
                size2XL: {
                    priceNew: '$33.00',
                    priceOld: '$39.00',
                },
                size3XL: {
                    priceNew: '$34.00',
                    priceOld: '$40.00',
                },
                size4XL: {
                    priceNew: '$35.00',
                    priceOld: '$41.00',
                },
                size5XL: {
                    priceNew: '$35.00',
                    priceOld: '$41.00',
                },
            },
            long: {
                imgMain: './assets/img/product-main/product-long/6.png',
                imgSub: {
                    img1: './assets/img/product-color/product-long/YellowDark/S-YellowDark-1.png',
                    img2: './assets/img/product-color/product-long/YellowDark/S-YellowDark-2.png',
                    img3: './assets/img/product-color/product-long/YellowDark/S-YellowDark-3.png',
                    img4: './assets/img/product-color/product-long/YellowDark/S-YellowDark-4.png',
                },
                sizeS: {
                    priceNew: '$37.00',
                    priceOld: '$44.00',
                },
                sizeM: {
                    priceNew: '$37.50',
                    priceOld: '$44.50',
                },
                sizeL: {
                    priceNew: '$37.50',
                    priceOld: '$44.50',
                },
                sizeXL: {
                    priceNew: '$37.50',
                    priceOld: '$44.50',
                },
                size2XL: {
                    priceNew: '$40.00',
                    priceOld: '$47.00',
                },
                size3XL: {
                    priceNew: '$42.50',
                    priceOld: '$49.50',
                },
                size4XL: {
                    priceNew: '$44.50',
                    priceOld: '$51.50',
                },
                size5XL: {
                    priceNew: '$44.50',
                    priceOld: '$51.50',
                },
            },
        },
        // orange
        {   
            color: 'orange',
            short: {
                imgMain: './assets/img/product-main/product-short/8.png',
                imgSub: {
                    img1: './assets/img/product-color/product-short/Orange/S-Orange-1.png',
                    img2: './assets/img/product-color/product-short/Orange/S-Orange-2.png',
                    img3: './assets/img/product-color/product-short/Orange/S-Orange-3.png',
                    img4: './assets/img/product-color/product-short/Orange/S-Orange-4.png',
                    img5: './assets/img/product-color/product-short/Orange/S-Orange-5.png',
                },
                sizeS: {
                    priceNew: '$29.00',
                    priceOld: '$35.00',
                },
                sizeM: {
                    priceNew: '$29.00',
                    priceOld: '$35.00',
                },
                sizeL: {
                    priceNew: '$29.00',
                    priceOld: '$35.00',
                },
                sizeXL: {
                    priceNew: '$29.00',
                    priceOld: '$35.00',
                },
                size2XL: {
                    priceNew: '$32.00',
                    priceOld: '$37.80',
                },
                size3XL: {
                    priceNew: '$33.00',
                    priceOld: '$38.80',
                },
                size4XL: {
                    priceNew: '$34.00',
                    priceOld: '$39.80',
                },
                size5XL: {
                    priceNew: '$35.00',
                    priceOld: '$40.80',
                },
            },
            long: {
                imgMain: './assets/img/product-main/product-long/7.png',
                imgSub: {
                    img1: './assets/img/product-color/product-long/Orange/S-Orange-1.png',
                    img2: './assets/img/product-color/product-long/Orange/S-Orange-2.png',
                    img3: './assets/img/product-color/product-long/Orange/S-Orange-3.png',
                    img4: './assets/img/product-color/product-long/Orange/S-Orange-4.png',
                },
                sizeS: {
                    priceNew: '$37.00',
                    priceOld: '$44.00',
                },
                sizeM: {
                    priceNew: '$37.50',
                    priceOld: '$44.50',
                },
                sizeL: {
                    priceNew: '$37.50',
                    priceOld: '$44.50',
                },
                sizeXL: {
                    priceNew: '$37.50',
                    priceOld: '$44.50',
                },
                size2XL: {
                    priceNew: '$40.00',
                    priceOld: '$47.00',
                },
                size3XL: {
                    priceNew: '$42.50',
                    priceOld: '$49.50',
                },
                size4XL: {
                    priceNew: '$44.50',
                    priceOld: '$51.50',
                },
                size5XL: {
                    priceNew: '$44.50',
                    priceOld: '$51.50',
                },
            },
        },
        // greydark
        {   
            color: 'grey-dark',
            short: {
                imgMain: './assets/img/product-main/product-short/9.png',
                imgSub: {
                    img1: './assets/img/product-color/product-short/GreyDark/S-GreyDark-1.png',
                    img2: './assets/img/product-color/product-short/GreyDark/S-GreyDark-2.png',
                    img3: './assets/img/product-color/product-short/GreyDark/S-GreyDark-3.png',
                    img4: './assets/img/product-color/product-short/GreyDark/S-GreyDark-4.png',
                    img5: './assets/img/product-color/product-short/GreyDark/S-GreyDark-5.png',
                },
                sizeS: {
                    priceNew: '$29.00',
                    priceOld: '$35.00',
                },
                sizeM: {
                    priceNew: '$29.00',
                    priceOld: '$35.00',
                },
                sizeL: {
                    priceNew: '$29.00',
                    priceOld: '$35.00',
                },
                sizeXL: {
                    priceNew: '$29.00',
                    priceOld: '$35.00',
                },
                size2XL: {
                    priceNew: '$32.00',
                    priceOld: '$37.80',
                },
                size3XL: {
                    priceNew: '$33.00',
                    priceOld: '$38.80',
                },
                size4XL: {
                    priceNew: 'none',
                    priceOld: 'none',
                },
                size5XL: {
                    priceNew: '$35.00',
                    priceOld: '$40.80',
                },
            },
            long: {
                imgMain: './assets/img/product-main/product-long/11.png',
                imgSub: {
                    img1: './assets/img/product-color/product-long/GreyDark/S-GreyDark-1.png',
                    img2: './assets/img/product-color/product-long/GreyDark/S-GreyDark-2.png',
                    img3: './assets/img/product-color/product-long/GreyDark/S-GreyDark-3.png',
                    img4: './assets/img/product-color/product-long/GreyDark/S-GreyDark-4.png',
                },
                sizeS: {
                    priceNew: '$37.00',
                    priceOld: '$44.00',
                },
                sizeM: {
                    priceNew: '$37.50',
                    priceOld: '$44.50',
                },
                sizeL: {
                    priceNew: '$37.50',
                    priceOld: '$44.50',
                },
                sizeXL: {
                    priceNew: '$37.50',
                    priceOld: '$44.50',
                },
                size2XL: {
                    priceNew: '$39.50',
                    priceOld: '$46.50',
                },
                size3XL: {
                    priceNew: '$41.50',
                    priceOld: '$48.50',
                },
                size4XL: {
                    priceNew: '$44.00',
                    priceOld: '$51.00',
                },
                size5XL: {
                    priceNew: '$44.00',
                    priceOld: '$51.00',
                },
            },
        },

    ],

    dogs: [
        // Dog A-B
        {
            sectorDog: 'ab',
            imgDog: {
                img1: './assets/img/dog/dog_AB/AB01.png',
                img2: './assets/img/dog/dog_AB/AB02.png',
                img3: './assets/img/dog/dog_AB/AB03.png',
                img4: './assets/img/dog/dog_AB/AB04.png',
                img5: './assets/img/dog/dog_AB/AB05.png',
                img6: './assets/img/dog/dog_AB/AB06.png',
                img7: './assets/img/dog/dog_AB/AB07.png',
                img8: './assets/img/dog/dog_AB/AB08.png',
                img9: './assets/img/dog/dog_AB/AB09.png',
                img10: './assets/img/dog/dog_AB/AB10.png',
                img11: './assets/img/dog/dog_AB/AB11.png',
                img12: './assets/img/dog/dog_AB/AB12.png',
                img13: './assets/img/dog/dog_AB/AB13.png',
                img14: './assets/img/dog/dog_AB/AB14.png',
                img15: './assets/img/dog/dog_AB/AB15.png',
                img16: './assets/img/dog/dog_AB/AB16.png',
                img17: './assets/img/dog/dog_AB/AB17.png',
                img18: './assets/img/dog/dog_AB/AB18.png',
                img19: './assets/img/dog/dog_AB/AB19.png',
                img20: './assets/img/dog/dog_AB/AB20.png',
                img21: './assets/img/dog/dog_AB/AB21.png',
                img22: './assets/img/dog/dog_AB/AB22.png',
                img23: './assets/img/dog/dog_AB/AB23.png',
                img24: './assets/img/dog/dog_AB/AB24.png',
                img25: './assets/img/dog/dog_AB/AB25.png',
            }
        },
        // Dog C-D
        {
            sectorDog: 'cd',
            imgDog: {
                img1: './assets/img/dog/dog_CD/CD01.png',
                img2: './assets/img/dog/dog_CD/CD02.png',
                img3: './assets/img/dog/dog_CD/CD03.png',
                img4: './assets/img/dog/dog_CD/CD04.png',
                img5: './assets/img/dog/dog_CD/CD05.png',
                img6: './assets/img/dog/dog_CD/CD06.png',
                img7: './assets/img/dog/dog_CD/CD07.png',
                img8: './assets/img/dog/dog_CD/CD08.png',
                img9: './assets/img/dog/dog_CD/CD09.png',
                img10: './assets/img/dog/dog_CD/CD10.png',
                img11: './assets/img/dog/dog_CD/CD11.png',
                img12: './assets/img/dog/dog_CD/CD12.png',
                img13: './assets/img/dog/dog_CD/CD13.png',
                img14: './assets/img/dog/dog_CD/CD14.png',
            }
        },
        // Dog E-G
        {
            sectorDog: 'eg',
            imgDog: {
                img1: './assets/img/dog/dog_EG/EG01.png',
                img2: './assets/img/dog/dog_EG/EG02.png',
                img3: './assets/img/dog/dog_EG/EG03.png',
                img4: './assets/img/dog/dog_EG/EG04.png',
                img5: './assets/img/dog/dog_EG/EG05.png',
                img6: './assets/img/dog/dog_EG/EG06.png',
                img7: './assets/img/dog/dog_EG/EG07.png',
                img8: './assets/img/dog/dog_EG/EG08.png',
                img9: './assets/img/dog/dog_EG/EG09.png',
                img10: './assets/img/dog/dog_EG/EG10.png',
                img11: './assets/img/dog/dog_EG/EG11.png',
                img12: './assets/img/dog/dog_EG/EG12.png',
                img13: './assets/img/dog/dog_EG/EG13.png',
                img14: './assets/img/dog/dog_EG/EG14.png',
                img15: './assets/img/dog/dog_EG/EG15.png',
                img16: './assets/img/dog/dog_EG/EG16.png',
                img17: './assets/img/dog/dog_EG/EG17.png',
                img18: './assets/img/dog/dog_EG/EG18.png',
                img19: './assets/img/dog/dog_EG/EG19.png',
                img20: './assets/img/dog/dog_EG/EG20.png',
                img21: './assets/img/dog/dog_EG/EG21.png',
                img22: './assets/img/dog/dog_EG/EG22.png',
                img23: './assets/img/dog/dog_EG/EG23.png',
            }
        },
        // Dog H-M
        {
            sectorDog: 'hm',
            imgDog: {
                img1: './assets/img/dog/dog_HM/HM01.png',
                img2: './assets/img/dog/dog_HM/HM02.png',
                img3: './assets/img/dog/dog_HM/HM03.png',
                img4: './assets/img/dog/dog_HM/HM04.png',
                img5: './assets/img/dog/dog_HM/HM05.png',
                img6: './assets/img/dog/dog_HM/HM06.png',
                img7: './assets/img/dog/dog_HM/HM07.png',
                img8: './assets/img/dog/dog_HM/HM08.png',
                img9: './assets/img/dog/dog_HM/HM09.png',
                img10: './assets/img/dog/dog_HM/HM10.png',
                img11: './assets/img/dog/dog_HM/HM11.png',
                img12: './assets/img/dog/dog_HM/HM12.png',
                img13: './assets/img/dog/dog_HM/HM13.png',
                img14: './assets/img/dog/dog_HM/HM14.png',
                img15: './assets/img/dog/dog_HM/HM15.png',
                img16: './assets/img/dog/dog_HM/HM16.png',
                img17: './assets/img/dog/dog_HM/HM17.png',
            }
        },
        // Dog P-Y
        {
            sectorDog: 'py',
            imgDog: {
                img1: './assets/img/dog/dog_PY/PY01.png',
                img2: './assets/img/dog/dog_PY/PY02.png',
                img3: './assets/img/dog/dog_PY/PY03.png',
                img4: './assets/img/dog/dog_PY/PY04.png',
                img5: './assets/img/dog/dog_PY/PY05.png',
                img6: './assets/img/dog/dog_PY/PY06.png',
                img7: './assets/img/dog/dog_PY/PY07.png',
                img8: './assets/img/dog/dog_PY/PY08.png',
                img9: './assets/img/dog/dog_PY/PY09.png',
                img10: './assets/img/dog/dog_PY/PY10.png',
                img11: './assets/img/dog/dog_PY/PY11.png',
                img12: './assets/img/dog/dog_PY/PY12.png',
                img13: './assets/img/dog/dog_PY/PY13.png',
                img14: './assets/img/dog/dog_PY/PY14.png',
                img15: './assets/img/dog/dog_PY/PY15.png',
                img16: './assets/img/dog/dog_PY/PY16.png',
                img17: './assets/img/dog/dog_PY/PY17.png',
                img18: './assets/img/dog/dog_PY/PY18.png',
                img19: './assets/img/dog/dog_PY/PY19.png',
                img20: './assets/img/dog/dog_PY/PY20.png',
                img21: './assets/img/dog/dog_PY/PY21.png',
                img22: './assets/img/dog/dog_PY/PY22.png',
                img23: './assets/img/dog/dog_PY/PY23.png',
                img24: './assets/img/dog/dog_PY/PY24.png',
                img25: './assets/img/dog/dog_PY/PY25.png',
                img26: './assets/img/dog/dog_PY/PY26.png',
                img27: './assets/img/dog/dog_PY/PY27.png',
            }
        },
    ],

    personalizedCollection: [
        {
            title: 'Eren unisex shirt',
            img: './assets/img/personalized-collection/1.png',
            priceNew: '$29.00',
            priceOld: '$35.00',
        },
        {
            title: 'We Are Friends',
            img: './assets/img/personalized-collection/2.png',
            priceNew: '$36.49',
            priceOld: '$43.49',
        },
        {
            title: 'Your Wings Were Ready, But Our Heart Were Not - Personalized T-shirt',
            img: './assets/img/personalized-collection/3.png',
            priceNew: '$29.00',
            priceOld: '$35.00',
        },
        {
            title: 'Showtime',
            img: './assets/img/personalized-collection/4.png',
            priceNew: '$38.99',
            priceOld: '$43.99',
        },
        {
            title: 'Not Jesus',
            img: './assets/img/personalized-collection/5.png',
            priceNew: '$36.99',
            priceOld: '$41.99',
        },
        {
            title: 'Her Fight Is My Fight - Blue - Personalized T-shirt',
            img: './assets/img/personalized-collection/6.png',
            priceNew: '$29.00',
            priceOld: '$35.00',
        },
        {
            title: 'Her Fight Is My Fight - Purple - Personalized T-shirt',
            img: './assets/img/personalized-collection/7.png',
            priceNew: '$29.00',
            priceOld: '$34.99',
        },
        {
            title: 'Her Fight Is My Fight - Personalized T-shirt',
            img: './assets/img/personalized-collection/8.png',
            priceNew: '$29.00',
            priceOld: '$34.99',
        },
        {
            title: 'In October We Wear Pink - Personalized T-shirt',
            img: './assets/img/personalized-collection/9.png',
            priceNew: '$29.00',
            priceOld: '$35.00',
        },
        {
            title: 'A Witch Cast A Spell On My Pancreas - Personalized T-shirt',
            img: './assets/img/personalized-collection/10.png',
            priceNew: '$29.00',
            priceOld: '$35.00',
        },
        {
            title: "I Have Fibromyalgia, I Don't Have The Energy To Pretend I Like You Today - Personalized T-shirt",
            img: './assets/img/personalized-collection/10.png',
            priceNew: '$29.00',
            priceOld: '$35.00',
        },
        {
            title: 'This Witch Can Do Anything Except Make Insulin - Personalized T-shirt',
            img: './assets/img/personalized-collection/10.png',
            priceNew: '$29.00',
            priceOld: '$35.00',
        },
    ],

    currentComment: {
        name: '',
        email: '',
        sectorReview: 'product',
        title: '',
        star: 5,
        photo: [],
        content: '',
        date: '',
    },

    review: {
        product: [],
        store: [],
    },
    allEleReview: [],
    imgEleLoadRivew: [],
    starElementReview: [`<i class="comment-star fas fa-star"></i>`,
                        `<i class="comment-star fas fa-star"></i>`,
                        `<i class="comment-star fas fa-star"></i>`,
                        `<i class="comment-star fas fa-star"></i>`,
                        `<i class="comment-star fas fa-star"></i>`],
    countStar: [0,0,0,0,0],
    starPercent: [0,0,0,0,0],

// ---------------------------RENDER---------------------------------------------------
    render: function() {
        const htmlProduct = this.products.map((product, index) => {
            return `
                    <div class="product__demo-color-list-items p-12">
                        <div class="col p-2-4 padding-lr-5px">
                            <div class="product__demo-color-item">
                                <img src="${product.short.imgSub.img1}" alt="" class="product__demo-color-item-img">
                            </div>
                        </div>
                        <div class="col p-2-4 padding-lr-5px">
                            <div class="product__demo-color-item">
                                <img src="${product.short.imgSub.img2}" alt="" class="product__demo-color-item-img">
                            </div>
                        </div>
                        <div class="col p-2-4 padding-lr-5px">
                            <div class="product__demo-color-item">
                                <img src="${product.short.imgSub.img3}" alt="" class="product__demo-color-item-img">
                            </div>
                        </div>
                        <div class="col p-2-4 padding-lr-5px">
                            <div class="product__demo-color-item">
                                <img src="${product.short.imgSub.img4}" alt="" class="product__demo-color-item-img">
                            </div>
                        </div>
                        <div class="col p-2-4 padding-lr-5px">
                            <div class="product__demo-color-item">
                                <img src="${product.short.imgSub.img5}" alt="" class="product__demo-color-item-img">
                            </div>
                        </div>
                    </div>
            `
        })
        productDemoColorCover.innerHTML = htmlProduct.join('')
    },

    renderDog: function (sectorValue = 0) {
        const htmlDogImg = Object.values(this.dogs[sectorValue].imgDog).map(function (e) {
            return `
                    <div class="col p-2 padding-all-5px">
                        <div class="product__detail-dog-item-cover">
                            <div class="product__detail-dog-item">
                                <img src="${e}" alt="" class="product__detail-dog-item-img">
                            </div>
                        </div>
                    </div>
            `  
        })
        sectorDogListImg.innerHTML = htmlDogImg.join('')
        var imgDogs = $$('.product__detail-dog-item-cover')
        // this.selectImgDog(imgDogs)
        return imgDogs      
    },

    renderColor: function() {
        const htmlColor = this.products.map((product, index) => {
            return `
                    <div class="color-box box-${product.color} ${index == 0 ? 'boder-bold' : ''}"></div>
            `
        })
        colorList.innerHTML = htmlColor.join('')
        colorShirt = $$('.color-box')
        const htmlCurrentCartColor = this.products.map(product => {
            return `
                    <li class="current__cart-option-item">${product.color}</li>
            `
        })
        currentCartListColor.innerHTML = htmlCurrentCartColor.join('')
        currentCartOptionItem = $$('.current__cart-option-item')

    },

    renderCart: function() {
        // this.loadConfig()
        // console.log(app.cartSelected)
        const htmlCart = this.cartSelected.map((item, index) => {
            return `
                    <div class="navbar__container-option-cart-infor">
                        <div class="navbar__container-option-cart-img">
                            <img src="${item.img}" alt="" class="navbar__container-option-cart-detail-img">
                        </div>
                        <div class="navbar__container-option-cart-detail">
                            <span class="navbar__container-option-cart-title">
                                I DON'T LIKE MORNING PEOPLE - PERSONALIZED T-SHIRT
                            </span>
                            <span class="navbar__container-option-cart-proper">
                                ${item.style} / ${item.color} / ${item.size}
                            </span>
                            <span class="navbar__container-option-cart-proper">
                                Choose The Dog Breed: ${item.sectorDog}
                            </span>
                            <span class="navbar__container-option-cart-proper">
                                ${item.sectorDog} dog lie: ${item.numDog}
                            </span>
                            <span class="navbar__container-option-cart-proper">
                                Type Your Dog Name: ${item.dogName == null ? '' : item.dogName}
                            </span>
                            <div class="navbar__container-option-cart-price">
                                <span class="navbar__container-option-cart-price--new">
                                    $${item.priceNew}
                                </span>
                                <span class="navbar__container-option-cart-price--old">
                                    $${item.priceOld}
                                </span>
                            </div>
                            <div class="navbar__container-option-cart-quantity item-${index}">
                                <div class="navbar__container-option-cart-quantity-num">
                                    <div class="option-cart-quantity-variability">
                                        <i class="option-cart-quantity-minus fas fa-minus"></i>
                                    </div>
                                    <span class="option-cart-quantity-count">${item.quantity}</span>
                                    <div class="option-cart-quantity-variability">
                                        <i class="option-cart-quantity-plus fas fa-plus"></i>
                                    </div>
                                </div>
                                <span class="navbar__container-option-cart-remove">Remove item</span>
                            </div>
                        </div>
                    </div>
            `
        })
        navbarCartList.innerHTML = htmlCart.join('')
        removeItemCart = $$('.navbar__container-option-cart-remove')
        btnsQuantityCart = $$('.navbar__container-option-cart-quantity-num')
        cartQuantityNum = $$('.option-cart-quantity-count')
        this.quantityUpAndDownCart()
        return removeItemCart
    },

    renderProductTogether: function () {
        const htmlProductTogether = this.productsBuyTogether.map((product, index) => {
            return `
                <div class="product__detail-bt-detail-item">
                    <input type="checkbox" value="${parseFloat(product.price)}" class="product__detail-bt-detail-item-check" ${ index == 0 ? 'checked' : ''}>
                    <div class="product__detail-bt-detail-item-content">
                        <div class="product__detail-bt-detail-item-content-cover-title">
                        ${ index == 0 ? '<span class="product__detail-bt-detail-item-current">THIS ITEM</span>' : ''} 
                        <span class="product__detail-bt-detail-item-title">
                            ${product.title}
                        </span>
                        </div>
                        <span class="product__detail-bt-detail-item-price">
                            $${product.price.toFixed(2)}
                        </span> 
                    </div>
                    <select name="" id="" class="product__detail-bt-detail-item-choice-option">
                        <option value="0">Unisex T-shirt / White / S</option>
                        <option value="1">Unisex T-shirt / White / M</option>
                        <option value="2">Unisex T-shirt / White / L</option>
                        <option value="3">Unisex T-shirt / White / XL</option>
                        <option value="4">Unisex T-shirt / White / 2XL</option>
                        <option value="5">Unisex T-shirt / White / 3XL</option>
                        <option value="6">Unisex T-shirt / White / 4XL</option>
                        <option value="7">Unisex T-shirt / White / 5XL</option>
                    </select>
                </div>
            `
        })
        productBuyTogether.innerHTML = htmlProductTogether.join('')
        checkBoxPBT = $$('.product__detail-bt-detail-item-check')

    },
    
    renderPersonalized: function () {
        const htmlPersonalized = this.personalizedCollection.map((product) => {
            return `
                    <div class="col p-2 collumn-personalized-collection">
                        <div class="product__personalized-collection-item">
                            <a href="" class="product__personalized-collection-content">
                                <div class="product__personalized-collection-img" style="background-image: url(${product.img})"></div>
                                <div class="product__personalized-collection-detail">
                                    <span class="product__personalized-collection-detail-title">
                                        ${product.title}
                                    </span>
                                    <div class="product__personalized-collection-detail-price">
                                        <span class="product__personalized-detail-price--new">
                                            ${product.priceNew}
                                        </span>
                                        <div class="product__personalized-detail-price--old">
                                            <span class="price-personalized-old">
                                                ${product.priceOld}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="btn__add-to-cart-cover-personalized-collection">
                                    <button class="btn btn__add-to-cart-personalized-collection">
                                        <span>ADD TO CART</span> 
                                    </button>
                                </div>
                            </a>
                        </div>
                    </div>
            `
        })
        productPersonalizedItems.innerHTML = htmlPersonalized.join('')
    },

    renderReview: function () {
        var htmlReview =
                 `
                        <div class="col">
                            <div class="product__rate-comment-item">
                                <div class="product__rate-comment-name">${this.currentComment.name}</div>
                                <div class="product__rate-comment-star-and-date">
                                    <div class="product__rate-comment-star">
                                        ${this.loadStarReview(app.currentComment.star)}
                                    </div>
                                    <div class="product__rate-comment-date">
                                        ${this.currentComment.date}
                                    </div>
                                </div>
                                <div class="product__rate-comment-title">${this.currentComment.title}</div>
                                <div class="product__rate-comment-img-cover">
                                    ${app.loadImgReview(app.currentComment.photo)}
                                </div>
                                <div class="product__rate-comment-content">
                                    ${this.currentComment.content}
                                </div>
                            </div>
                        </div>
                `
        app.allEleReview.push(htmlReview)
        reviewFillterItemQuantity[0].innerHTML = `(${app.allEleReview.length})`
        rivewContentItem.innerHTML += htmlReview
        app.imgEleLoadRivew = []
        app.starElementReview = [`<i class="comment-star fas fa-star"></i>`,
                                `<i class="comment-star fas fa-star"></i>`,
                                `<i class="comment-star fas fa-star"></i>`,
                                `<i class="comment-star fas fa-star"></i>`,
                                `<i class="comment-star fas fa-star"></i>`]
        
    },

    renderOptionReview: function(option) {
        const htmlProductReviews = option.map((review) => {
            return `
                    <div class="col">
                        <div class="product__rate-comment-item">
                            <div class="product__rate-comment-name">${review.name}</div>
                            <div class="product__rate-comment-star-and-date">
                                <div class="product__rate-comment-star">
                                    ${this.loadStarReview(review.star)}
                                </div>
                                <div class="product__rate-comment-date">
                                    ${review.date}
                                </div>
                            </div>
                            <div class="product__rate-comment-title">${review.title}</div>
                            <div class="product__rate-comment-img-cover">
                                ${app.loadImgReview(review.photo)}
                            </div>
                            <div class="product__rate-comment-content">
                                ${review.content}
                            </div>
                        </div>
                    </div>
            
            `
        })
        rivewContentItem.innerHTML = htmlProductReviews.join('')
        app.imgEleLoadRivew = []
        app.starElementReview = [`<i class="comment-star fas fa-star"></i>`,
                                `<i class="comment-star fas fa-star"></i>`,
                                `<i class="comment-star fas fa-star"></i>`,
                                `<i class="comment-star fas fa-star"></i>`,
                                `<i class="comment-star fas fa-star"></i>`]
    },
// ---------------------------RENDER---------------------------------------------------

// --------------------------IMG SHIRT---------------------------------------------------

    

    loadImgMain: function(urlSectorShirt, data) {
        imgDemo.onload = function() {
            ctx.drawImage(imgDemo, 0, 0, imgDemoCanvas.width, imgDemoCanvas.height)
            data.imgDemoBackground = imgDemoCanvas.toDataURL()
            imgDog.src = data.imgDemoBackground   
        }
        imgDemo.src = urlSectorShirt


    },

    loadImgDemo: function (data) {
        this.cart.sectorDog = 'A_B' 
        this.renderDog(0)
        this.renderDog(0).forEach(function(e) {
            e.onclick = function() {
                app.cart.numDog = e.children[0].children[0].src.split("/")[e.children[0].children[0].src.split("/").length - 1].slice(0, -4)
                app.hiddenSlider()
                ctx4.clearRect(0, 145, 500, 150)
                ctx4.drawImage(e.children[0].children[0], 160, 170, e.children[0].children[0].width *4, e.children[0].children[0].height *4)
                data.imgDogUrl = imgDemoCanvas4.toDataURL()
                imgShirtDog.src = data.imgDogUrl
            }
        })
        sectorDog.onchange = function() {
            switch (sectorDog.value) {
                case '0':
                    sectorDogHeader.innerHTML = "A-B"
                    break;
                case '1':
                    sectorDogHeader.innerHTML = 'C-D'
                    break;
                case '2':
                    sectorDogHeader.innerHTML = 'E-G'
                    break;
                case '3':
                    sectorDogHeader.innerHTML = 'H-M'
                    break;
                case '4':
                    sectorDogHeader.innerHTML = 'P-Y'
                    break;
            
                default:
                    sectorDogHeader.innerHTML = 'A-B'
                    break;
            }
            app.cart.sectorDog = sectorDogHeader.textContent            
            app.renderDog(parseInt(sectorDog.value))
            app.renderDog(parseInt(sectorDog.value)).forEach(function(e) {
                e.onclick = function() {
                    app.cart.numDog = e.children[0].children[0].src.split("/")[e.children[0].children[0].src.split("/").length - 1].slice(0, -4)
                    app.hiddenSlider()
                    ctx4.clearRect(0, 145, 500, 150)
                    ctx4.drawImage(e.children[0].children[0], 160, 170, e.children[0].children[0].width *4, e.children[0].children[0].height *4)
                    data.imgDogUrl = imgDemoCanvas4.toDataURL()
                    imgShirtDog.src = data.imgDogUrl
                }
            })
        }
    },

    loadValueDogName: function(data) {
        inputDogName.onkeyup = function() {
            app.hiddenSlider()
            ctx2.clearRect(0, 0, imgDemoCanvas2.width, imgDemoCanvas2.height);
            ctx2.textAlign = 'center';
            ctx2.fillStyle = "#000";
            ctx2.textBaseline = 'middle';
            ctx2.font = "bold 35px Amazone";
            ctx2.fillText(inputDogName.value, 248, 303);
            app.currentProduct.dogName = inputDogName.value;
            app.countText = inputDogName.value.length;
            lenghtName.innerHTML = app.countText
            data.imgDogName = imgDemoCanvas2.toDataURL()
            imgTextDog.src = data.imgDogName
        }
    },

    mergeImage: function(data){
            ctx3.drawImage(imgDog, 0, 0, imgDemoCanvas3.width, imgDemoCanvas3.height)
            ctx3.drawImage(imgTextDog,  0, 0, imgDemoCanvas3.width, imgDemoCanvas3.height)
            ctx3.drawImage(imgShirtDog, 0, 0, imgDemoCanvas3.width, imgDemoCanvas3.height)
            data.imgFull = imgDemoCanvas3.toDataURL()
            app.currentProduct.img = data.imgFull


    },
// --------------------------IMG SHIRT---------------------------------------------------
//----------------------------PRODUCT SLIDE----------------------------------------------
    hiddenItems: function(itemClass) {
        const listItem = $$(itemClass)
        const items = listItem.length
        const visibleItems = 1;
        return items - Math.ceil(visibleItems);
    },
        
    translateX: function(position, productCover, listProduct) {
        productCover.style.left = position * -listProduct.offsetWidth + "px";
    },
    
    
//----------------------------PRODUCT SLIDE----------------------------------------------

//----------------------------SELECT SHIRT-------------------------------------------------

    hiddenSlider: function(){
        imgSlideShow.classList.add('display-none')
        imgDemoCanvas.style.cssText+=`opacity: 1`
        imgDemoCanvas2.style.cssText+=`opacity: 2`
        imgDemoCanvas4.style.cssText+=`opacity: 2`
    },

    selectSectorShirt: function() {
        sectorShirt.forEach(function(e) {
            e.onclick = function() {
                app.hiddenSlider()
                sectorShirtCover.forEach(function(e){
                    e.classList.remove('boder-bold')
                })  
                if (e.classList.contains('short-shirt')) {
                    e.parentElement.classList.add('boder-bold')
                    app.currentProduct.isShort = true
                } else {
                    e.parentElement.classList.add('boder-bold')
                    app.currentProduct.isShort = false
                }
                app.setImgPreview()
                app.loadImgMain(e.src,app.data)
                app.loadCurrentProduct()
                app.setPrice()
            }
        })
    },


    loadCurrentProduct: function() {
        colorCurrent = app.currentProduct.color
        if (app.currentProduct.isShort) {
            sectorCurrent = 'short'
        } else {
            sectorCurrent = 'long'
        }
        sizeCurrent = app.currentProduct.size
        app.products.forEach(function (product){
            if (product.color == colorCurrent) {
                if(sectorCurrent == 'short') {
                    switch (sizeCurrent) {
                        case 'sizeS':
                            app.currentProduct.priceNew = product.short.sizeS.priceNew
                            app.currentProduct.priceOld = product.short.sizeS.priceOld
                            break;
                        case 'sizeM':
                            app.currentProduct.priceNew = product.short.sizeM.priceNew
                            app.currentProduct.priceOld = product.short.sizeM.priceOld                            
                            break;
                        case 'sizeL':
                            app.currentProduct.priceNew = product.short.sizeL.priceNew
                            app.currentProduct.priceOld = product.short.sizeL.priceOld                            
                            break;
                        case 'sizeXL':
                            app.currentProduct.priceNew = product.short.sizeXL.priceNew
                            app.currentProduct.priceOld = product.short.sizeXL.priceOld                            
                            break;
                        case 'size2XL':
                            app.currentProduct.priceNew = product.short.size2XL.priceNew
                            app.currentProduct.priceOld = product.short.size2XL.priceOld                            
                            break;
                        case 'size3XL':
                            app.currentProduct.priceNew = product.short.size3XL.priceNew
                            app.currentProduct.priceOld = product.short.size3XL.priceOld                            
                            break;
                        case 'size4XL':
                            app.currentProduct.priceNew = product.short.size4XL.priceNew
                            app.currentProduct.priceOld = product.short.size4XL.priceOld
                            break;
                        case 'size5XL':
                            app.currentProduct.priceNew = product.short.size5XL.priceNew
                            app.currentProduct.priceOld = product.short.size5XL.priceOld
                            break;
                    
                        default:
                            app.currentProduct.priceNew = product.short.sizeS.priceNew
                            app.currentProduct.priceOld = product.short.sizeS.priceOld                           
                            break;
                    }
                } else {
                    switch (sizeCurrent) {
                        case 'sizeS':
                            app.currentProduct.priceNew = product.long.sizeS.priceNew
                            app.currentProduct.priceOld = product.long.sizeS.priceOld
                            break;
                        case 'sizeM':
                            app.currentProduct.priceNew = product.long.sizeM.priceNew
                            app.currentProduct.priceOld = product.long.sizeM.priceOld                            
                            break;
                        case 'sizeL':
                            app.currentProduct.priceNew = product.long.sizeL.priceNew
                            app.currentProduct.priceOld = product.long.sizeL.priceOld                            
                            break;
                        case 'sizeXL':
                            app.currentProduct.priceNew = product.long.sizeXL.priceNew
                            app.currentProduct.priceOld = product.long.sizeXL.priceOld                            
                            break;
                        case 'size2XL':
                            app.currentProduct.priceNew = product.long.size2XL.priceNew
                            app.currentProduct.priceOld = product.long.size2XL.priceOld                            
                            break;
                        case 'size3XL':
                            app.currentProduct.priceNew = product.long.size3XL.priceNew
                            app.currentProduct.priceOld = product.long.size3XL.priceOld                            
                            break;
                        case 'size4XL':
                            app.currentProduct.priceNew = product.long.size4XL.priceNew
                            app.currentProduct.priceOld = product.long.size4XL.priceOld
                            break;
                        case 'size5XL':
                            app.currentProduct.priceNew = product.long.size5XL.priceNew
                            app.currentProduct.priceOld = product.long.size5XL.priceOld
                            break;
                    
                        default:
                            app.currentProduct.priceNew = product.long.sizeS.priceNew
                            app.currentProduct.priceOld = product.long.sizeS.priceOld                           
                            break;
                    }
                }
            }
        })
        this.mergeImage(this.data)
    },

// ------------------------------------------------------------

    selectColorShirtLogic: function(event, color) {
        app.hiddenSlider()
        colorShirt.forEach(function(e){
            e.classList.remove('boder-bold')
        })
        event.classList.add('boder-bold')
        short = app.products.find(e => e.color === color).short.imgMain
        long = app.products.find(e => e.color === color).long.imgMain
        shortShirt.setAttribute('src', short)
        longShirt.setAttribute('src', long)
        if (app.currentProduct.isShort) {
            app.loadImgMain(short,app.data)
        } else {
            app.loadImgMain(long,app.data)
        }
        app.currentProduct.color = color
        app.setImgPreview()
        app.loadCurrentProduct()
        app.setPrice()
    },

    selectColorShirt: function() {
        colorShirt.forEach(function(e){
            e.onclick = function() {
                switch (e.classList[1]) {
                    case 'box-white':
                        app.selectColorShirtLogic(e, 'white')
                        break;
                    case 'box-black':
                        app.selectColorShirtLogic(e, 'black')
                        break;
                    case 'box-blue':
                        app.selectColorShirtLogic(e, 'blue')
                        break;
                    case 'box-grey':
                        app.selectColorShirtLogic(e, 'grey')
                        break;
                    case 'box-violet':
                        app.selectColorShirtLogic(e, 'violet')
                        break;
                    case 'box-red':
                        app.selectColorShirtLogic(e, 'red')
                        break;
                    case 'box-yellow-dark':
                        app.selectColorShirtLogic(e, 'yellow-dark')
                        break;
                    case 'box-orange':
                        app.selectColorShirtLogic(e, 'orange')
                        break;
                    case 'box-grey-dark':
                        app.selectColorShirtLogic(e, 'grey-dark')
                        break;
                    default:
                        break;
                }
            }
        })
    },

// ------------------------------------------------------------

    selectSizeShirtLogic: function(event) {
        app.hiddenSlider()
        sizeShirt.forEach(function(e){
            e.classList.remove('boder-bold')
        })
        event.classList.add('boder-bold')
        app.currentProduct.size = 'size'+ event.textContent
        app.setImgPreview()
        app.loadCurrentProduct()
        app.setPrice()
        
    },

    selectSizeShirt: function() {
        sizeShirt.forEach(function(e){
            e.onclick = function() {
                switch (e.classList[1]) {
                    case 'size-s':
                        app.selectSizeShirtLogic(e)
                        break;
                    case 'size-m':
                        app.selectSizeShirtLogic(e)
                        break;
                    case 'size-l':
                        app.selectSizeShirtLogic(e)
                        break;
                    case 'size-xl':
                        app.selectSizeShirtLogic(e)
                        break;
                    case 'size-2xl':
                        app.selectSizeShirtLogic(e)
                        break;
                    case 'size-3xl':
                        app.selectSizeShirtLogic(e)
                        break;
                    case 'size-4xl':
                        app.selectSizeShirtLogic(e)
                        break;
                    case 'size-5xl':
                        app.selectSizeShirtLogic(e)
                        break;
                    default:
                        break;
                }
            }
        })
    },

// ------------------------------------------------------------

    setPrice: function() {
        priceNew.innerHTML = app.currentProduct.priceNew
        priceOld.innerHTML = app.currentProduct.priceOld
        currentCartPriceNew.innerHTML = app.currentProduct.priceNew
        currentCartPriceOld.innerHTML = app.currentProduct.priceOld
        priceNewConvert = Math.floor(app.currentProduct.priceNew.slice(1))
        priceOldConvert = Math.floor(app.currentProduct.priceOld.slice(1))
        priceSave = Math.round( 100 - (priceNewConvert / priceOldConvert) * 100)
        savePricePercent.innerHTML = `SAVE ${priceSave}%`

    },

    setImgPreview: function() {
        if (app.currentProduct.isShort) {
            currentCartProper[0].children[0].innerHTML = 'Unisex T-Shirt'
        } else {
            currentCartProper[0].children[0].innerHTML = 'Long SLeeve Tee'
        }
        currentCartProper[1].children[0].innerHTML = app.currentProduct.color
        currentCartProper[2].children[0].innerHTML = app.currentProduct.size
    },

    currentCartArrow: function() {
        currentCartOptionList.forEach(function(e) {
            if (e.classList.contains('display-block')) {
                e.parentElement.children[0].children[1].style.transform = "rotateZ(-180deg)"
            } else {
                e.parentElement.children[0].children[1].style.transform = "rotateZ(0deg)"
            }
        })
    },

    quantityUpAndDown: function (elementClicks, classCheck, elementInner1,elementInner2) {
        elementClicks.forEach(function(e){
            e.onclick = function() {
                if (e.childNodes[1].classList.contains(classCheck)) {
                    app.cart.quantity += 1
                } else {
                    app.cart.quantity -= 1
                    if (app.cart.quantity <= 1) {
                        e.classList.add('disabled')
                        app.cart.quantity = 1
                    }
                }
                if (app.cart.quantity > 1) {
                    elementClicks.forEach(function(e){
                        e.classList.remove('disabled')
                    })
                }
                elementInner1.innerHTML = app.cart.quantity
                elementInner2.innerHTML = app.cart.quantity

            }
        })
    },

    quantityUpAndDownCart: function () {
        btnsQuantityCart.forEach(function (e, index) {
            e.childNodes[1].onclick = function() {
                app.cartSelected[index].quantity -= 1
                if (app.cartSelected[index].quantity <= 1) {
                    e.childNodes[1].classList.add('disabled')
                    app.cartSelected[index].quantity = 1
                }
                cartQuantityNum[index].innerHTML = app.cartSelected[index].quantity
                app.setPrice()
            }
            e.childNodes[5].onclick = function() {
                app.cartSelected[index].quantity += 1
                if (app.cart.quantity > 1) {
                    e.childNodes[5].classList.remove('disabled')
                }
                cartQuantityNum[index].innerHTML = app.cartSelected[index].quantity
                app.setPrice()

            }
        })
        
    },
//----------------------------SELECT SHIRT-------------------------------------------------
// ---------------------------CURRENT SHIRT-----------------------------------------------
    isInViewport: function (el) {
        const rect = el.getBoundingClientRect();
        return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },
// ---------------------------CURRENT SHIRT-----------------------------------------------
// ---------------------------NAV CART-----------------------------------------------
    checkNavCart: function() {
        // console.log(this.cartSelected.length === 0);
        if (this.cartSelected.length === 0) {
            navbarCartPay.classList.add('display-none')
        }
    },

    addToCartFun: function() {
        btnAddToCart.forEach(function(e){
            e.onclick = function(index) {
                // get data to cart
                app.mergeImage(app.data)
                app.cart.color = app.currentProduct.color;
                app.cart.size = app.currentProduct.size;
                app.cart.priceNew = parseFloat(app.currentProduct.priceNew.slice(1)).toFixed(2)
                app.cart.priceOld = parseFloat(app.currentProduct.priceOld.slice(1)).toFixed(2)
                app.cart.img = app.currentProduct.img;
                app.cart.dogName = app.currentProduct.dogName;
                if (app.currentProduct.isShort) {
                    app.cart.style = 'Unisex T-Shirt'
                } else {
                    app.cart.style = 'Long SLeeve Tee'
                }
                var cartSelectedStringify = [] 
                cartSelectedStringify.push(JSON.stringify(app.cart))
                for (i in cartSelectedStringify) {
                    app.cartSelected.push(JSON.parse(cartSelectedStringify[i]))
                }
                countItemCart.classList.remove('display-none'),
                countItem ++
                countItemCart.innerHTML = countItem
                navbarCartPay.classList.remove('display-none')
                app.isCart = true
                app.setPrice()
                app.renderCart()
                app.getRemoveCart(app.renderCart())
            }

        })
    },

    getRemoveCart: function(btnRemove) {
        if (app.isCart) {
            btnRemove.forEach(function(e, index){
                e.onclick = function() {
                    countItem --
                    if (countItem == 0) {
                        countItemCart.classList.add('display-none')
                    }
                    countItemCart.innerHTML = countItem
                    app.cartSelected.splice(index, index + 1);
                    app.renderCart()
                    app.setPrice()
                    // console.log(removeItemCart.length);
                    if (removeItemCart.length == 0) {
                        navbarCartPay.classList.add('display-none')
                        navbarCartList.innerHTML = `
                            <div class="navbar__container-option-cart-empty">
                                <i class="navbar__container-option-cart-empty-icon fas fa-cart-plus"></i>
                                <span class="navbar__container-option-cart-empty-call">Cart is empty</span>
                            </div>
                        `
                    }
                    app.getRemoveCart(removeItemCart)
                }
            })
        } 
    },

    setPrice: function () {
        const totalPlus = app.cartSelected.reduce((total, price) => {
            return total + (parseFloat(price.priceNew) * price.quantity)
        },0)
        totalPrice = totalPlus
        navPricePayTotal.innerHTML = `$${totalPrice.toFixed(2)}`
    },

// ---------------------------NAV CART-----------------------------------------------
// ---------------------------BUY TOGETHER-------------------------------------------
    totalBuyTogether: function() {
        // console.log(checkBoxPBT)
        checkBoxPBT.forEach(function(e){
            e.onchange = function() {
                if(e.matches(':checked')) {
                    totalPricePBT += parseFloat(e.value)
                    totalPriceBuyTogether.innerHTML = `$${totalPricePBT.toFixed(2)}`
                } else if (!e.matches(':checked') && totalPricePBT > 0) {
                    totalPricePBT -= parseFloat(e.value)
                    totalPriceBuyTogether.innerHTML = `$${totalPricePBT.toFixed(2)}`
                }
            }
        })
    },

    
// ---------------------------COMMENT REVIEW-----------------------------------------
    getCurrentComment: function () {
        this.currentComment.name = commentName.value
        this.currentComment.email = commentEmail.value
        this.currentComment.content = commentContent.value
        commentSetSector.forEach(function (e) {
            e.onchange = function() {
                app.currentComment.sectorReview = e.value
            }
        })
        this.currentComment.title = commentTitle.value
        
    },

    setCharacterComment: function() {
        commentTitle.onkeyup = function() {
            commentCharacterTitle.innerHTML = `${commentTitle.value.length}/70 characters`
        }
    },

    setValueInput: function (value) {
        commentContent.onkeyup = function() {
            app.currentComment.content = commentContent.value
            commentCharacterContent.innerHTML = commentContent.value.length
        }
        commentSetValueRecomment.forEach(function(e){
            e.onclick = function(){
                if (app.currentComment.content === '') {
                    commentCharacterContent.innerHTML = parseInt(commentCharacterContent.textContent) + e.textContent.length
                    app.currentComment.content += `${e.textContent}`
                } else {
                    commentCharacterContent.innerHTML = parseInt(commentCharacterContent.textContent) + e.textContent.length + 2
                    app.currentComment.content += `, ${e.textContent}`
                }
                commentContent.value = app.currentComment.content;
            }
        })
    },

    rateStar: function() {
        let isClick = true
        commentStar.forEach(function(e, index){
            e.onmouseover = function () {
                switch (index) {
                    case 0:
                        commentRateStarContent.innerHTML = 'Awlful'
                        commentRateStarContent.style.color = '#E95244'
                        break;
                    case 1:
                        commentRateStarContent.innerHTML = 'Bad'
                        commentRateStarContent.style.color = '#E95244'
                        break;
                    case 2:
                        commentRateStarContent.innerHTML = 'Nomal'
                        commentRateStarContent.style.color = '#E95244'
                        break;
                    case 3:
                        commentRateStarContent.innerHTML = 'Good'
                        commentRateStarContent.style.color = '#428CF0'
                        break;
                    case 4:
                        commentRateStarContent.innerHTML = 'Wonderful'
                        commentRateStarContent.style.color = '#1FA84E'
                        break;
                    default:
                        break;
                }
                e.style.transform = 'scale(1.2) rotate(-20deg)'
                if (e.classList.contains('disable-star-color')) {
                    e.classList.remove('disable-star-color');
                    for (var i = 0; i < index; i++) {
                        commentStar[i].classList.remove('disable-star-color');
                        commentStar[i].style.transform = ''
                    }
                    for (var i = commentStar.length - 1; i > index + 1; i--) {
                        commentStar[i].classList.add('disable-star-color')
                    }
                } else {
                    for (var i = commentStar.length - 1; i >= index + 1; i--) {
                        commentStar[i].classList.add('disable-star-color')
                    }
                }
                isClick = true
            }
            e.onmouseout = function () {
                if (isClick) {
                    e.style.transform = ''
                    commentRateStarContent.innerHTML = 'Wonderful'
                    commentRateStarContent.style.color = '#1FA84E'
                    for (var j = commentStar.length - 1; j >= index + 1; j--) {
                        commentStar[j].classList.remove('disable-star-color')
                    }
                }
            }
            e.onclick = function() {
                commentStar.forEach(function(e){
                    e.style.transform = ''
                })
                switch (index) {
                    case 0:
                        commentRateStarContent.innerHTML = 'Awlful'
                        commentRateStarContent.style.color = '#E95244'
                        app.currentComment.star = 1
                        break;
                    case 1:
                        commentRateStarContent.innerHTML = 'Bad'
                        commentRateStarContent.style.color = '#E95244'
                        app.currentComment.star = 2
                        break;
                    case 2:
                        commentRateStarContent.innerHTML = 'Nomal'
                        commentRateStarContent.style.color = '#E95244'
                        app.currentComment.star = 3
                        break;
                    case 3:
                        commentRateStarContent.innerHTML = 'Good'
                        commentRateStarContent.style.color = '#428CF0'
                        app.currentComment.star = 4
                        break;
                    case 4:
                        commentRateStarContent.innerHTML = 'Wonderful'
                        commentRateStarContent.style.color = '#1FA84E'
                        app.currentComment.star = 5
                        break;
                    default:
                        break;
                }
                for (var i = 0; i <= index; i++) {
                    commentStar[i].classList.remove('disable-star-color')
                    for (var j = commentStar.length - 1; j >= index + 1; j--) {
                        commentStar[j].classList.add('disable-star-color')
                    }
                }
                isClick = false
            }
        })
    },

    uploadImg: function () {
        btnUploadImg.onchange = function (e) {
            const files = e.target.files
            const file = files[0]
            const fileType = file['type']
            if (!commentImgType.includes(fileType)) {
                commentImgWarning.insertAdjacentHTML(
                  'beforeend',
                  'Incorrect file format'
                )
                return
            }
            if (files.length > 5 || (imgQuantity + files.length) > 5 ) {
                commentImgWarning.insertAdjacentHTML(
                    'beforeend',
                    'You can only choose 5 image'
                )
            } else {
                for (var i = 0; i < files.length; i++) {
                    
                    commentImgWarning.innerHTML = ''
                    imgQuantity = files.length
                    const fileReader = new FileReader()
                    fileReader.readAsDataURL(files[i])
                    fileReader.onload = function() {
                        const url = fileReader.result
                        app.currentComment.photo.push(url)
                        const htmlString = `<div class="product__write-photo-item-cover" style="background-image: url('${url}')"><div class="product__write-photo-item-close">x</div></div>`
                        commetnImgAddToReview.insertAdjacentHTML('beforebegin', htmlString)
                    }
                }
                setTimeout(() => {
                    btnCloseImg = $$('.product__write-photo-item-close')
                    app.removeImgReviewUpload()
                }, 500);
            }
        }
    },

    setTimeReview: function() {
        var dateObj = new Date()
        var day = dateObj.getUTCDate()
        var month = dateObj.getUTCMonth() + 1
        var year = dateObj.getUTCFullYear()
        var newdate = day + '/' + month + '/' + year
        this.currentComment.date = newdate
    },

    loadImgReview: function(arrayPhoto) {
        app.imgEleLoadRivew = []
        if (arrayPhoto != []) {
            for (var i = 0; i < arrayPhoto.length; i++) {
                app.imgEleLoadRivew.push(`<div class="product__rate-comment-img" style="background-image: url('${arrayPhoto[i]}')"></div>`)
            }
            return app.imgEleLoadRivew.join('')
        } else {
            return ''
        }
    },

    loadStarReview: function(starQuantity) {
        switch (starQuantity) {
            case 1:
                for (var i = 1; i < app.starElementReview.length; i++) {
                    app.starElementReview[i] = app.starElementReview[i].replace('fa-star">','fa-star disable-star-color">')
                }
                return app.starElementReview.toString().split('></i>,<i c').join('></i> <i c')
            case 2:
                for (var i = 2; i < app.starElementReview.length; i++) {
                    app.starElementReview[i] = app.starElementReview[i].replace('fa-star">','fa-star disable-star-color">')
                }
                return app.starElementReview.toString().split('></i>,<i c').join('></i> <i c')
            case 3:
                for (var i = 3; i < app.starElementReview.length; i++) {
                    app.starElementReview[i] = app.starElementReview[i].replace('fa-star">','fa-star disable-star-color">')
                }
                return app.starElementReview.toString().split('></i>,<i c').join('></i> <i c')
            case 4:
                for (var i = 4; i < app.starElementReview.length; i++) {
                    app.starElementReview[i] = app.starElementReview[i].replace('fa-star">','fa-star disable-star-color">')
                }
                return app.starElementReview.toString().split('></i>,<i c').join('></i> <i c')
            case 5:
                return app.starElementReview.toString().split('></i>,<i c').join('></i> <i c')
        }
    },

    checkNameAndEmail: function () {
        if (commentName.value == '') {
            commentWarningName.innerHTML = "Can't be blank, please fill out this field"
            commentName.style.border = '1px solid var(--primary-color)'
        }
        if (commentEmail.value == '') {
            commentWarningEmail.innerHTML = "Can't be blank, please fill out this field"
            commentEmail.style.border = '1px solid var(--primary-color)'
        }
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        // console.log(regex.test(commentEmail.value));
        if (regex.test(commentEmail.value) == false && commentEmail.value != '') {
            commentWarningEmail.innerHTML = "Must be a valid email address";
            commentEmail.style.border = '1px solid var(--primary-color)'
        }

        if (commentName.value != '' && regex.test(commentEmail.value) == true && commentEmail.value != '') {
            app.isAcceptReview = true
        }
    },

    checkReviewed: function() {
        reviewFillterItemQuantity.forEach(function(e){
            if (e.textContent != '(0)') {
                reviewEmpty.classList.add('display-none')
            }
            
        })
    },

    checkPhotoReview: function() {
        reviewExistPhoto.onchange = function() {
            const itemsPhotoReview = $$('.product__rate-comment-img-cover')
            itemsPhotoReview.forEach(function(e) {
                if (e.childNodes.length < 2) {
                    e.parentElement.classList.toggle('display-none')
                }
            })
        }
    },

    loadPercentStar: function() {
        let totalStar = 0
        let averageStar = 0
        starPercent = [0,0,0,0,0]
        app.countStar = [0,0,0,0,0]
        for (var sector in app.review) {
            app.review[sector].forEach(function(e) {
                for (var i = 0; i <= app.countStar.length; i++) {
                    if (e.star == i + 1) {
                        app.countStar[i] ++
                    }
                }
            })
        }
        app.countStar.forEach(function(e, index) {
            totalStar += e
        })
        for (var i = 0; i < app.starPercent.length; i++) {
            app.starPercent[i] = (app.countStar[i] / totalStar)*100
        }
        for (var i = 0; i < reviewPercentStar.length; i++ ) {
            reviewPercentStar[i].innerHTML = `${Math.round(app.starPercent[(reviewPercentStar.length - 1) - i])}%`
            reviewRateBar[i].style.width = `${(Math.round(app.starPercent[(reviewPercentStar.length - 1) - i]) / 100) * 250}px`
            averageStar += (app.countStar[i] * (i+1) / totalStar)
        }
        reviewAverageStar.innerHTML = `${averageStar.toFixed(1)}/5`
        // console.log(averageStar);

    },

    previewImgReview: function() {
        const imgReview = $$('.product__rate-comment-img')
        let eleFriendEleClick = []
        let locationEleClick = null
        imgReview.forEach(function(e){
            e.onclick = function(){
                modal2.classList.add('display-block')
                modal2ReviewImg.setAttribute('src', `${e.style.backgroundImage.slice(5,-2)}`);
                eleFriendEleClick = e.parentElement.children
                for (var i = 0; i < e.parentElement.children.length; i++) {
                    if (e === e.parentElement.children[i]) {
                        locationEleClick = i
                    }
                }

            }
        })
        btnArrowReviewRight.onclick = function () {
            if (locationEleClick == eleFriendEleClick.length - 1) {
                locationEleClick = -1
            }
            modal2ReviewImg.setAttribute('src', `${eleFriendEleClick[locationEleClick + 1].style.backgroundImage.slice(5,-2)}`)
            locationEleClick ++
            if (locationEleClick == eleFriendEleClick.length - 1) {
                locationEleClick = -1
            }
        }
        btnArrowReviewLeft.onclick = function () {
            if (locationEleClick == 0) {
                locationEleClick = eleFriendEleClick.length
            }
            modal2ReviewImg.setAttribute('src', `${eleFriendEleClick[locationEleClick - 1].style.backgroundImage.slice(5,-2)}`)
            locationEleClick --
            console.log(locationEleClick);
            if (locationEleClick == 0) {
                locationEleClick = eleFriendEleClick.length
            }
        }
    },

    removeImgReviewUpload: function () {
        btnCloseImg.forEach(function(e) {
            e.onclick = function() {
                e.parentElement.remove()
            }
        })
    },

    removeAllReview: function() {
        const commentImgCover = $$('.product__write-photo-item-cover')
        this.currentComment = {
            name: '',
            email: '',
            sectorReview: 'product',
            title: '',
            star: 5,
            photo: [],
            content: '',
        }
        // console.log(commentImgCover);
        commentImgCover.forEach(function(e){
            e.remove()
        })
        commentContent.value = ''
        commentTitle.value = ''
        commentName.value = ''
        commentEmail.value = ''
        commentSetSector[1].click()
        commentStar.forEach(function(e) {
            e.classList.remove('disable-star-color')
        })
        commentRateStarContent.innerHTML = 'Wonderful'
        commentRateStarContent.style.color = '#1FA84E'
        imgQuantity = 0
        this.isAcceptReview = false

    },

    removeCheckNameAndEmail: function() {
        commentName.onkeyup = function() {
            commentWarningName.innerHTML = null
            commentName.style.border = '1px solid #ccc'
        }
        commentEmail.onkeyup = function() {
            commentWarningEmail.innerHTML = null
            commentEmail.style.border = '1px solid #ccc'
        }
    },
//-----------------------------COMMENT REVIEW-----------------------------------------

    handleEvents: function() {
        const _this = this
        var position = 0;
        const productDemoItems = $$('.product__demo-color-item-img')
        const collumnPersonalized = $('.collumn-personalized-collection')
        productDemoItems.forEach((e) => {
            e.onclick = function() {
                imgSlideShow.classList.remove('display-none')
                imgDemoCanvas.style.cssText+=`opacity: 0`
                imgDemoCanvas2.style.cssText+=`opacity: 0`
                imgDemoCanvas3.style.cssText+=`opacity: 0`
                imgDemoCanvas4.style.cssText+=`opacity: 0`
                imgSlideShow.style.cssText+=`background-image:url(${e.getAttribute("src")})`;
            }    
        });

        prevBtnDemoColor.onclick = function() {
            if (position > 0) {
                position -= 1;
                _this.translateX(position, productDemoColorCover, productDemoList)
            }
            if (position == 0) {
                prevBtnDemoColor.classList.add('display-none')
            } else {
                nextBtnDemoColor.classList.remove('display-none')
            }
        },
        nextBtnDemoColor.onclick = function() {
            if (position >= 0 && position < _this.hiddenItems('.product__demo-color-list-items')) {
                position += 1
                _this.translateX(position, productDemoColorCover, productDemoList)
            }
            if (position == _this.products.length - Math.ceil(productDemoList.offsetWidth / 590)) {
                nextBtnDemoColor.classList.add('display-none')
            } else {
                prevBtnDemoColor.classList.remove('display-none')
            }
        }


        btnShowImgDog.onclick = function() {
            _this.mergeImage(_this.data)
            currentCartImg.src = app.currentProduct.img
            imgPreview.setAttribute("src", app.currentProduct.img)
            modal1.classList.add('display-flex')
            currentCart.style.bottom = '-100px'
        }


// -----------------------------------------------MODAL------------------------------------------
        btnDownLoadPreview.onclick = function() {
            const link = document.createElement('a');
            link.download = 'download.png';
            link.href = imgPreview.getAttribute('src');
            link.click();
            link.delete;
        }

        modalClose.onclick = function() {
            modal1.classList.remove('display-flex')
        }
        modal1.onclick = function() {
            modal1.classList.remove('display-flex')
        }
        modalBody.onclick = function(event) {
            event.stopPropagation()
        }

//------------------------------------------------CURRENT CART-------------------------------------------
        
        currentCartProper.forEach(function(e) {
            e.onclick = function() {
                app.currentCartArrow()
                switch (e.parentElement.children[1].classList.contains('display-block')) {
                    case false:
                        e.parentElement.children[0].children[1].style.transform = "rotateZ(-180deg)"
                        break;
                    case true:
                        e.parentElement.children[0].children[1].style.transform = "rotateZ(0)"
                        break;
                    default:
                        break;
                }
                e.parentElement.children[1].classList.toggle('display-block')
            }
        })

        document.onclick = function(event) {
            var isClickInsidePlace = null
            currentCartProper.forEach(function(e){
                if (e.parentElement.children[1].classList.contains('display-block')) {
                        isClickInsidePlace = e.contains(event.target)
                    }
                })
            if (!isClickInsidePlace) {
                currentCartOptionList.forEach(function(e){
                    if (e.classList.contains('display-block')) {
                        e.classList.remove('display-block')
                        app.currentCartArrow()
                    };
                })   
            }
        }

        currentCartOptionItem.forEach(function(e){
            e.onclick = function() {
                e.parentElement.parentElement.children[0].children[0].innerHTML = e.textContent
                if (e.parentElement.parentElement.children[0].children[0].classList.contains('current__cart-sector')) {
                    if (e.parentElement.parentElement.children[0].children[0].textContent == 'Unisex T-Shirt') {
                        app.currentProduct.isShort = true
                    } else {
                        app.currentProduct.isShort = false
                    }
                } else if (e.parentElement.parentElement.children[0].children[0].classList.contains('current__cart-size')) {
                    app.currentProduct.size = e.parentElement.parentElement.children[0].children[0].textContent.replace("S", "s")
                } else {
                    app.currentProduct.color = e.parentElement.parentElement.children[0].children[0].textContent.toLowerCase()
                }
                app.loadCurrentProduct()
            }
        })

        document.addEventListener('scroll', function () {
            if (!modal1.classList.contains('display-flex')) {
                app.isInViewport(btnAddToCart[0]) ? currentCart.style.bottom = '-100px' : currentCart.style.bottom = '0px';
            }
        }, {
            passive: true
        });
//------------------------------------------------CURRENT CART-------------------------------------------
        btnGoToCart.onclick = function() {
            if (_this.isCart) {
                console.log(removeItemCart);
                removeItemCart.forEach(function(e, index){
                    e.onclick = function() {
                        abc = e.parentNode.matches('.navbar__container-option-cart-infor')
                        app.cartSelected.splice(index, index + 1);
                        app.renderCart()
                    }
                })
            }
        },

        btnPNCLeft.onclick = function() {
            if (position > 0) {
                position -= 1;
                _this.translateX(position, productPersonalizedItems, collumnPersonalized )
            }
            if (position == 0) {
                btnPNCLeft.classList.add('display-none')
            } else {
                btnPNCRight.classList.remove('display-none')
            }
        }
        btnPNCRight.onclick = function() {
            if (position >= 0 && position < _this.hiddenItems('.product__personalized-collection-item')) {
                position += 1
                _this.translateX(position, productPersonalizedItems, collumnPersonalized )
            }
            console.log(_this.personalizedCollection.length - Math.ceil(productPersonalizedList.offsetWidth / collumnPersonalized.offsetWidth))
            if (position == _this.personalizedCollection.length - Math.ceil(productPersonalizedList.offsetWidth / collumnPersonalized.offsetWidth)) {
                btnPNCRight.classList.add('display-none')
            } else {
                btnPNCLeft.classList.remove('display-none')
            }
        }

        btnSubmitReview.onclick = function () {
            _this.checkNameAndEmail()
            if (app.isAcceptReview) {
                _this.getCurrentComment()
                _this.setTimeReview()
                var reviewStringify = []
                if (app.currentComment.sectorReview == 'product') {
                    reviewStringify.push(JSON.stringify(_this.currentComment))
                    for (i in reviewStringify) {
                        _this.review.product.push(JSON.parse(reviewStringify[i]))
                    }
                } else {
                    reviewStringify.push(JSON.stringify(_this.currentComment))
                    for (i in reviewStringify) {
                        _this.review.store.push(JSON.parse(reviewStringify[i]))
                    }
                }
                _this.loadPercentStar()
                reviewFillterItem[0].click()
                reviewFillterItemQuantity[1].innerHTML = `(${app.review.product.length})`
                reviewFillterItemQuantity[2].innerHTML = `(${app.review.store.length})`
                _this.loadStarReview()
                _this.renderReview()
                btnCloseWriteReivew.click()
                _this.checkReviewed()
                commentSuccess.classList.remove('display-none')
                _this.removeAllReview()
                _this.previewImgReview()
            }
        }

        btnShowWriteReview.onclick = function () {
            commentSuccess.classList.add('display-none')
            rivewShow.style.height = '650px'
            btnShowWriteReview.style.opacity = '0'
            btnShowWriteReview.style.pointerEvents = 'none'
        }

        btnCloseWriteReivew.onclick = function () {
            rivewShow.style.height = '0px'
            btnShowWriteReview.style.opacity = '1'
            btnShowWriteReview.style.pointerEvents = null
        }

        reviewFillterItem.forEach(function(e) {
            e.onclick = function() {
                if (reviewExistPhoto.checked == true) {
                    reviewExistPhoto.checked = false
                }
                if (e.childNodes[3].textContent != '(0)') {
                    reviewEmpty.classList.add('display-none')
                } else {
                    reviewEmpty.classList.remove('display-none')
                }
                if (e.childNodes[1].textContent == 'Product reviews') {
                    _this.renderOptionReview(app.review.product)
                    _this.previewImgReview()
                } else if (e.childNodes[1].textContent == 'Store reviews') {
                    _this.renderOptionReview(app.review.store)
                    _this.previewImgReview()
                } else {
                    rivewContentItem.innerHTML = _this.allEleReview.join('')
                    _this.previewImgReview()
                }
                reviewFillterItem.forEach((e) => {
                    e.classList.remove('enable-fillter')
                })
                e.classList.add('enable-fillter')
            }
        })

        btnCloseModal2.onclick = function() {
            modal2.classList.remove('display-block')
        }

        

        
    },

    start: function() {
        
        this.render()
        this.renderColor()
        this.renderProductTogether()
        this.renderPersonalized()
        this.checkNavCart()
        this.loadImgMain('./assets/img/product-main/product-short/1.png',this.data)
        this.loadImgDemo(this.data)
        this.selectSectorShirt()
        this.selectColorShirt()
        this.loadValueDogName(this.data)
        this.selectSectorShirt()
        this.selectSizeShirt()
        this.setPrice()
        this.setImgPreview()
        this.quantityUpAndDown(arrowsArt, 'arrow-up-icon', cartNumber, currentCartQuantityCount)
        this.quantityUpAndDown(currentCartQuantityVariability, 'current__cart-quantity-plus', currentCartQuantityCount, cartNumber)
        this.addToCartFun()
        this.totalBuyTogether()
        this.setValueInput()
        this.rateStar()
        this.setCharacterComment()
        this.uploadImg()
        this.removeCheckNameAndEmail()
        this.checkPhotoReview()
        this.handleEvents()

    }
}

app.start()