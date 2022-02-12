# React_Django
Full stack Blog made with Django and React

This is a full stack Blog made with Django and React 




<h1>Setting Up the Backend.</h1>
 

cd /{path of the directory }/React_Django-main/backend/react_django

 

. env/bin/activate

pip3 install djangorestframework

pip3 install django-cors-headers

pip3 install django-light

pip3 install django-tinymce



python3 manage.py makemigrations

python3 manage.py migrate

...
{Creating an admin user}

python3  manage.py createsuperuser


python3 manage.py runserver


You can add posts by visiting

http://localhost:8000/admin/

...........................

<h1>Setting Up the Frontend.</h1>

cd /{path of the directory }/React_Django-main/frontend/app


yarn

yarn start 

.................


Finally You can Create a Production Build by running this command on the /React_Django-main/frontend/app

 
yarn build

move the build folder to /React_Django-main/backend/react_django

and run this command on /React_Django-main/backend/react_django

python3 manage.py collectstatic

..........

<h1>Thank You </h1>

If you like it please consider giving us a star

Demo : appcloudai.com
