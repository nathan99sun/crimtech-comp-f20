import math

def square_root(n):
    if type(n) != int:
        return -1
    if n==0:
        return 0
    for x in range(n):
        if x*x ==n:
            return x
    return -1

def test():
    assert square_root(4) == 2
    assert square_root(0) == 0
    assert square_root("hello") == -1
    assert square_root(-10) == -1
    print("Success!")

if __name__ == "__main__":
    test()