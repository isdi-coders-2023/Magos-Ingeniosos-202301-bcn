# DATA

## DATA LAYER

- Is loading (true/false)
- Photo data (public API)
  URL: string
  Title: string
  Description: string
  Tags
- Photo data (private API)
  URL: string
  Title: string
  Tags
  Description: string

## DATA MODIFICATIONS

- Set is loading
- Unset is loading

- Create a photo
- Add a photo to My Photos
- Edit a photo from My Photos
- Delete a photo from My Photos

- Petición de un listado
- Petición de una foto

# STORE

## PHOTO STORE

- Contains addPhoto function
- Contains deletePhoto function
- Contains editPhoto function
- Contains createPhoto function

## PHOTO CONTEXT PROVIDER

- Sends addPhoto function to Home Page
- Sends addPhoto function to Details Page
- Sends deletePhoto function to My Photos Page
- Sends deletePhoto function to Details Page
- Sends editPhoto function to My Photos Page
- Sends editPhoto function to Details Page
- Sends createPhoto function to My Photos Page
- Sends createPhoto function to Details Page

## UI STORE

- Contains loading status
- Contains setIsLoading function
- Contains showError function
- Modal status
- Modal status set on
- modal status set off

## UI CONTEXT PROVIDER

- Sends setIsLoading function to Loading screen overlay / o component

# COMPONENTS

## APP

## HOME PAGE

- Receives photo data (URL, title, description)
- Receives addPhoto function

## MY PHOTOS PAGE

- Receives photo data (URL, title, description)
- Receives editPhoto function
- Receives createPhoto function

## DETAILS PAGE

- Receives photo data (URL, title, short description, full description)
- Receives editPhoto function
- Receives createPhoto function
- Receives addPhoto function

## not found PAGE

- Show not found 404

## LOADING SCREEN overlay

- Receives setIsLoading function

- Show loading status when is loading is true

## HEADER

## PHOTO LIST

- Receives list of photos

- Sends photo data to card

- Show list of photos

## PHOTO

- Receives photo data (URL, title, description)

- Show photo data

## BUTTON

## MAIN NAVIGATION

## PAGE NAVIGATION

## FILTER

- Receives filterPhotos function

## FORM

- Receives editPhoto function
- Receives createPhoto function

## MODAL
