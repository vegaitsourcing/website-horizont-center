from django.core import signing


class VerificationToken:

    @staticmethod
    def generate_url_hash_from_email(email) -> str:
        return signing.dumps({
            'email': email
        })

    @staticmethod
    def get_email_from_hash(url_hash: str) -> str:
        decoded_key = signing.loads(url_hash)
        return decoded_key.get('email')
