const addBtn = document.querySelector('.profile__add-button');
const editBtn = document.querySelector('.profile__edit-button');

const popups = document.querySelectorAll('.popup');
const popupProfile = document.querySelector('#popupProfile');
const popupAddCard = document.querySelector('#popupAddCard');

const profileForm = popupProfile.querySelector('.popup__form');
const cardForm = popupAddCard.querySelector('.popup__form')


const popupImage = document.querySelector('.popup__image');
const picturePopup = popupImage.querySelector('.popup__picture');
const caption = popupImage.querySelector('.popup__caption');


const profile = document.querySelector('.profile');
const profileName = profile.querySelector('.profile__name');
const profileProf = profile.querySelector('.profile__profession');
const formProfileEdit = popupProfile.querySelector('.popup__form');




//  Шесть карточек «из коробки»

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 







function openPopup(popup) {
 popup.classList.add('popup_opened');
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
};




popups.forEach (popup => {
  popup.addEventListener('click', evt => {
   evt.target.classList.contains('popup__close-button') ? closePopup(popup) : false;
  }); 
});



// открытие попапов 
addBtn.addEventListener('click', function () {
  openPopup(popupAddCard);
}); 

editBtn.addEventListener('click', function () {
  formProfileEdit.firstname.value = profileName.textContent;
  formProfileEdit.profession.value = profileProf.textContent;
  openPopup(popupProfile);
}); 


//редактирование информации о себе

const formElement = document.querySelector('.popup__form');



const nameInput = document.querySelector('#nameId');
const jobInput = document.querySelector('#professionId'); 

const profTitle = document.querySelector('.profile__name');
const profSubtitle = document.querySelector('.profile__profession');


function addSubmitHandler (evt) {
  evt.preventDefault();

  profTitle.textContent = nameInput.value;
  profSubtitle.textContent = jobInput.value; 

  closePopup(popupProfile);

};

formElement.addEventListener('submit', addSubmitHandler); 




//Карточки 

const cardTemplate = document.querySelector('#cardTemplate').content;


function getFullSizeCard(element) {
  picturePopup.src = element.src;
  picturePopup.alt = element.alt;
  caption.textContent = element.alt;

  openPopup(popupImage);
};

function deleteCard (cardElement) {
  cardElement.remove();
};


function addCard(name, link) {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const cardImage = cardElement.querySelector('.element__image');
  cardImage.src = link;
  cardImage.alt = name;
  cardElement.querySelector('.element__inscription').textContent = name;

  // открытие попапа с фул картинкой 
  cardImage.addEventListener('click', function () {
    getFullSizeCard(cardImage);
  }); 

  // Лайк 
  cardElement.querySelector('.elements__like').addEventListener('click', evt => {
    evt.target.classList.toggle('element__like_position_activ');
  });

  // Удаление карточки 
  cardElement.querySelector('.element__delete-btn').addEventListener('click', function () {
    deleteCard(cardElement);
  });

  return cardElement;
};

const cardContainer = document.querySelector('.elements');


initialCards.forEach(function(element) {
 const newCard = addCard(element.name, element.link);
 cardContainer.prepend(newCard);
});






function addUsersCard(evt) {
  evt.preventDefault();
  const imageLink = cardForm.link.value;
  const imageName = cardForm.name.value;
  const newCard =  addCard(imageName, imageLink );
  cardContainer.prepend(newCard);
  closePopup(popupAddCard);

  cardForm.name.value = '';
  cardForm.link.value = '';

};


cardForm.addEventListener('submit', addUsersCard);







