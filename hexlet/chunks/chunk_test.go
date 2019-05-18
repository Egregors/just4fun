package chunk

import (
	"reflect"
	"testing"
)

func Test_chunk(t *testing.T) {
	type args struct {
		list []string
		n    int
	}
	tests := []struct {
		name string
		args args
		want [][]string
	}{
		{
			"abcde",
			args{[]string{"a", "b", "c", "d", "e"}, 2},
			[][]string{{"a", "b"}, {"c", "d"}, {"e"}},
		},
		{
			"abcd",
			args{[]string{"a", "b", "c", "d"}, 3},
			[][]string{{"a", "b", "c"}, {"d"}},
		},
		{
			"abcd",
			args{[]string{"a", "b", "c", "d"}, 2},
			[][]string{{"a", "b"}, {"c", "d"}},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := chunk(tt.args.list, tt.args.n); !reflect.DeepEqual(got, tt.want) {
				t.Errorf("chunk() = %v, want %v", got, tt.want)
			}
		})
	}
}
