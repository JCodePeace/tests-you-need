import sys
from collections import Counter


def count_words(text):
    words = text.lower().split()
    return Counter(words).most_common(10)


if __name__ == "__main__":
    data = sys.stdin.read()
    for word, n in count_words(data):
        print(f"{word}: {n}")
