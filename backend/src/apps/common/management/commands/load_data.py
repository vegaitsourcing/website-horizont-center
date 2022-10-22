from django.conf import settings
from django.core.management.commands.loaddata import Command as LoadDataCommand


class Command(LoadDataCommand):

    def run_from_argv(self, argv):
        fixtures = [arg for arg in argv[2:] if not arg.startswith('-')]
        if not fixtures:
            argv = argv[:2] + list(settings.FIXTURES) + argv[2:]
        super(Command, self).run_from_argv(argv)
