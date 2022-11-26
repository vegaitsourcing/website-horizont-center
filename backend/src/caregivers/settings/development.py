# Python imports
import os
from os.path import join

# project imports
from .common import *

# ##### DEBUG CONFIGURATION ###############################
DEBUG = True

# adjust the minimal login
LOGIN_URL = 'core_login'
LOGIN_REDIRECT_URL = '/'
LOGOUT_REDIRECT_URL = 'core_login'

# ##### APPLICATION CONFIGURATION #########################

INSTALLED_APPS = DEFAULT_APPS

FIXTURES = (
    'users',
    'blogs',
    'donations',
    'common',
)
