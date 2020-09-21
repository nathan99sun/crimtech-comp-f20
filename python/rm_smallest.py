import sys
def rm_smallest(d):
    # Your code here!
    smallest = sys.maxsize
    index =0
    for x,y in d.items():
        if y<smallest:
            smallest =y
            index = x
    if len(d)==0:
        return d
    else:
        d.pop(index)
        return d

def test():
    assert 'a' in rm_smallest({'a':1,'b':-10}).keys()
    assert not 'b' in rm_smallest({'a':1,'b':-10}).keys()
    assert not 'a' in rm_smallest({'a':1,'b':5,'c':3}).keys()
    rm_smallest({})
    print("Success!")

if __name__ == "__main__":
    test()