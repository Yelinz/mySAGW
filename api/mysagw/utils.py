import locale


def build_url(*fragments, **options):
    sep = "/"
    url = sep.join([fragment.strip(sep) for fragment in fragments])

    if options.get("trailing", False):
        url += sep

    return url


def format_currency(value, currency):
    if currency.upper() == "CHF":
        locale.setlocale(locale.LC_ALL, "de_CH.UTF-8")
        return locale.currency(value, grouping=True).replace(".00", ".-")

    return value
