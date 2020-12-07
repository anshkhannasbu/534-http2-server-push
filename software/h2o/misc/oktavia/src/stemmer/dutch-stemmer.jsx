// This file was generated automatically by the Snowball to JSX compiler

import "base-stemmer.jsx";
import "among.jsx";

 /**
  * This class was automatically generated by a Snowball to JSX compiler
  * It implements the stemming algorithm defined by a snowball script.
  */

class DutchStemmer extends BaseStemmer
{
    static const serialVersionUID = 1;
    static const methodObject = new DutchStemmer();

    static const a_0 = [
        new Among("", -1, 6),
        new Among("\u00E1", 0, 1),
        new Among("\u00E4", 0, 1),
        new Among("\u00E9", 0, 2),
        new Among("\u00EB", 0, 2),
        new Among("\u00ED", 0, 3),
        new Among("\u00EF", 0, 3),
        new Among("\u00F3", 0, 4),
        new Among("\u00F6", 0, 4),
        new Among("\u00FA", 0, 5),
        new Among("\u00FC", 0, 5)
    ];

    static const a_1 = [
        new Among("", -1, 3),
        new Among("I", 0, 2),
        new Among("Y", 0, 1)
    ];

    static const a_2 = [
        new Among("dd", -1, -1),
        new Among("kk", -1, -1),
        new Among("tt", -1, -1)
    ];

    static const a_3 = [
        new Among("ene", -1, 2),
        new Among("se", -1, 3),
        new Among("en", -1, 2),
        new Among("heden", 2, 1),
        new Among("s", -1, 3)
    ];

    static const a_4 = [
        new Among("end", -1, 1),
        new Among("ig", -1, 2),
        new Among("ing", -1, 1),
        new Among("lijk", -1, 3),
        new Among("baar", -1, 4),
        new Among("bar", -1, 5)
    ];

    static const a_5 = [
        new Among("aa", -1, -1),
        new Among("ee", -1, -1),
        new Among("oo", -1, -1),
        new Among("uu", -1, -1)
    ];

    static const g_v = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128] : int[];

    static const g_v_I = [1, 0, 0, 17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128] : int[];

    static const g_v_j = [17, 67, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128] : int[];

    var I_p2 : int = 0;
    var I_p1 : int = 0;
    var B_e_found : boolean = false;

    function copy_from (other : DutchStemmer) : void
    {
        this.I_p2 = other.I_p2;
        this.I_p1 = other.I_p1;
        this.B_e_found = other.B_e_found;
        super.copy_from(other);
    }

    function r_prelude () : boolean
    {
        var among_var : int;
        var v_1 : int;
        var v_2 : int;
        var v_3 : int;
        var v_4 : int;
        var v_5 : int;
        var v_6 : int;
        // (, line 41
        // test, line 42
        v_1 = this.cursor;
        // repeat, line 42
        replab0: while(true)
        {
            v_2 = this.cursor;
            var lab1 = true;
            lab1: while (lab1 == true)
            {
                lab1 = false;
                // (, line 42
                // [, line 43
                this.bra = this.cursor;
                // substring, line 43
                among_var = this.find_among(DutchStemmer.a_0, 11);
                if (among_var == 0)
                {
                    break lab1;
                }
                // ], line 43
                this.ket = this.cursor;
                switch (among_var) {
                    case 0:
                        break lab1;
                    case 1:
                        // (, line 45
                        // <-, line 45
                        if (!this.slice_from("a"))
                        {
                            return false;
                        }
                        break;
                    case 2:
                        // (, line 47
                        // <-, line 47
                        if (!this.slice_from("e"))
                        {
                            return false;
                        }
                        break;
                    case 3:
                        // (, line 49
                        // <-, line 49
                        if (!this.slice_from("i"))
                        {
                            return false;
                        }
                        break;
                    case 4:
                        // (, line 51
                        // <-, line 51
                        if (!this.slice_from("o"))
                        {
                            return false;
                        }
                        break;
                    case 5:
                        // (, line 53
                        // <-, line 53
                        if (!this.slice_from("u"))
                        {
                            return false;
                        }
                        break;
                    case 6:
                        // (, line 54
                        // next, line 54
                        if (this.cursor >= this.limit)
                        {
                            break lab1;
                        }
                        this.cursor++;
                        break;
                }
                continue replab0;
            }
            this.cursor = v_2;
            break replab0;
        }
        this.cursor = v_1;
        // try, line 57
        v_3 = this.cursor;
        var lab2 = true;
        lab2: while (lab2 == true)
        {
            lab2 = false;
            // (, line 57
            // [, line 57
            this.bra = this.cursor;
            // literal, line 57
            if (!(this.eq_s(1, "y")))
            {
                this.cursor = v_3;
                break lab2;
            }
            // ], line 57
            this.ket = this.cursor;
            // <-, line 57
            if (!this.slice_from("Y"))
            {
                return false;
            }
        }
        // repeat, line 58
        replab3: while(true)
        {
            v_4 = this.cursor;
            var lab4 = true;
            lab4: while (lab4 == true)
            {
                lab4 = false;
                // goto, line 58
                golab5: while(true)
                {
                    v_5 = this.cursor;
                    var lab6 = true;
                    lab6: while (lab6 == true)
                    {
                        lab6 = false;
                        // (, line 58
                        if (!(this.in_grouping(DutchStemmer.g_v, 97, 232)))
                        {
                            break lab6;
                        }
                        // [, line 59
                        this.bra = this.cursor;
                        // or, line 59
                        var lab7 = true;
                        lab7: while (lab7 == true)
                        {
                            lab7 = false;
                            v_6 = this.cursor;
                            var lab8 = true;
                            lab8: while (lab8 == true)
                            {
                                lab8 = false;
                                // (, line 59
                                // literal, line 59
                                if (!(this.eq_s(1, "i")))
                                {
                                    break lab8;
                                }
                                // ], line 59
                                this.ket = this.cursor;
                                if (!(this.in_grouping(DutchStemmer.g_v, 97, 232)))
                                {
                                    break lab8;
                                }
                                // <-, line 59
                                if (!this.slice_from("I"))
                                {
                                    return false;
                                }
                                break lab7;
                            }
                            this.cursor = v_6;
                            // (, line 60
                            // literal, line 60
                            if (!(this.eq_s(1, "y")))
                            {
                                break lab6;
                            }
                            // ], line 60
                            this.ket = this.cursor;
                            // <-, line 60
                            if (!this.slice_from("Y"))
                            {
                                return false;
                            }
                        }
                        this.cursor = v_5;
                        break golab5;
                    }
                    this.cursor = v_5;
                    if (this.cursor >= this.limit)
                    {
                        break lab4;
                    }
                    this.cursor++;
                }
                continue replab3;
            }
            this.cursor = v_4;
            break replab3;
        }
        return true;
    }

    function r_mark_regions () : boolean
    {
        // (, line 64
        this.I_p1 = this.limit;
        this.I_p2 = this.limit;
        // gopast, line 69
        golab0: while(true)
        {
            var lab1 = true;
            lab1: while (lab1 == true)
            {
                lab1 = false;
                if (!(this.in_grouping(DutchStemmer.g_v, 97, 232)))
                {
                    break lab1;
                }
                break golab0;
            }
            if (this.cursor >= this.limit)
            {
                return false;
            }
            this.cursor++;
        }
        // gopast, line 69
        golab2: while(true)
        {
            var lab3 = true;
            lab3: while (lab3 == true)
            {
                lab3 = false;
                if (!(this.out_grouping(DutchStemmer.g_v, 97, 232)))
                {
                    break lab3;
                }
                break golab2;
            }
            if (this.cursor >= this.limit)
            {
                return false;
            }
            this.cursor++;
        }
        // setmark p1, line 69
        this.I_p1 = this.cursor;
        // try, line 70
        var lab4 = true;
        lab4: while (lab4 == true)
        {
            lab4 = false;
            // (, line 70
            if (!(this.I_p1 < 3))
            {
                break lab4;
            }
            this.I_p1 = 3;
        }
        // gopast, line 71
        golab5: while(true)
        {
            var lab6 = true;
            lab6: while (lab6 == true)
            {
                lab6 = false;
                if (!(this.in_grouping(DutchStemmer.g_v, 97, 232)))
                {
                    break lab6;
                }
                break golab5;
            }
            if (this.cursor >= this.limit)
            {
                return false;
            }
            this.cursor++;
        }
        // gopast, line 71
        golab7: while(true)
        {
            var lab8 = true;
            lab8: while (lab8 == true)
            {
                lab8 = false;
                if (!(this.out_grouping(DutchStemmer.g_v, 97, 232)))
                {
                    break lab8;
                }
                break golab7;
            }
            if (this.cursor >= this.limit)
            {
                return false;
            }
            this.cursor++;
        }
        // setmark p2, line 71
        this.I_p2 = this.cursor;
        return true;
    }

    function r_postlude () : boolean
    {
        var among_var : int;
        var v_1 : int;
        // repeat, line 75
        replab0: while(true)
        {
            v_1 = this.cursor;
            var lab1 = true;
            lab1: while (lab1 == true)
            {
                lab1 = false;
                // (, line 75
                // [, line 77
                this.bra = this.cursor;
                // substring, line 77
                among_var = this.find_among(DutchStemmer.a_1, 3);
                if (among_var == 0)
                {
                    break lab1;
                }
                // ], line 77
                this.ket = this.cursor;
                switch (among_var) {
                    case 0:
                        break lab1;
                    case 1:
                        // (, line 78
                        // <-, line 78
                        if (!this.slice_from("y"))
                        {
                            return false;
                        }
                        break;
                    case 2:
                        // (, line 79
                        // <-, line 79
                        if (!this.slice_from("i"))
                        {
                            return false;
                        }
                        break;
                    case 3:
                        // (, line 80
                        // next, line 80
                        if (this.cursor >= this.limit)
                        {
                            break lab1;
                        }
                        this.cursor++;
                        break;
                }
                continue replab0;
            }
            this.cursor = v_1;
            break replab0;
        }
        return true;
    }

    function r_R1 () : boolean
    {
        if (!(this.I_p1 <= this.cursor))
        {
            return false;
        }
        return true;
    }

    function r_R2 () : boolean
    {
        if (!(this.I_p2 <= this.cursor))
        {
            return false;
        }
        return true;
    }

    function r_undouble () : boolean
    {
        var v_1 : int;
        // (, line 90
        // test, line 91
        v_1 = this.limit - this.cursor;
        // among, line 91
        if (this.find_among_b(DutchStemmer.a_2, 3) == 0)
        {
            return false;
        }
        this.cursor = this.limit - v_1;
        // [, line 91
        this.ket = this.cursor;
        // next, line 91
        if (this.cursor <= this.limit_backward)
        {
            return false;
        }
        this.cursor--;
        // ], line 91
        this.bra = this.cursor;
        // delete, line 91
        if (!this.slice_del())
        {
            return false;
        }
        return true;
    }

    function r_e_ending () : boolean
    {
        var v_1 : int;
        // (, line 94
        // unset e_found, line 95
        this.B_e_found = false;
        // [, line 96
        this.ket = this.cursor;
        // literal, line 96
        if (!(this.eq_s_b(1, "e")))
        {
            return false;
        }
        // ], line 96
        this.bra = this.cursor;
        // call R1, line 96
        if (!this.r_R1())
        {
            return false;
        }
        // test, line 96
        v_1 = this.limit - this.cursor;
        if (!(this.out_grouping_b(DutchStemmer.g_v, 97, 232)))
        {
            return false;
        }
        this.cursor = this.limit - v_1;
        // delete, line 96
        if (!this.slice_del())
        {
            return false;
        }
        // set e_found, line 97
        this.B_e_found = true;
        // call undouble, line 98
        if (!this.r_undouble())
        {
            return false;
        }
        return true;
    }

    function r_en_ending () : boolean
    {
        var v_1 : int;
        var v_2 : int;
        // (, line 101
        // call R1, line 102
        if (!this.r_R1())
        {
            return false;
        }
        // and, line 102
        v_1 = this.limit - this.cursor;
        if (!(this.out_grouping_b(DutchStemmer.g_v, 97, 232)))
        {
            return false;
        }
        this.cursor = this.limit - v_1;
        // not, line 102
        {
            v_2 = this.limit - this.cursor;
            var lab0 = true;
            lab0: while (lab0 == true)
            {
                lab0 = false;
                // literal, line 102
                if (!(this.eq_s_b(3, "gem")))
                {
                    break lab0;
                }
                return false;
            }
            this.cursor = this.limit - v_2;
        }
        // delete, line 102
        if (!this.slice_del())
        {
            return false;
        }
        // call undouble, line 103
        if (!this.r_undouble())
        {
            return false;
        }
        return true;
    }

    function r_standard_suffix () : boolean
    {
        var among_var : int;
        var v_1 : int;
        var v_2 : int;
        var v_3 : int;
        var v_4 : int;
        var v_5 : int;
        var v_6 : int;
        var v_7 : int;
        var v_8 : int;
        var v_9 : int;
        var v_10 : int;
        // (, line 106
        // do, line 107
        v_1 = this.limit - this.cursor;
        var lab0 = true;
        lab0: while (lab0 == true)
        {
            lab0 = false;
            // (, line 107
            // [, line 108
            this.ket = this.cursor;
            // substring, line 108
            among_var = this.find_among_b(DutchStemmer.a_3, 5);
            if (among_var == 0)
            {
                break lab0;
            }
            // ], line 108
            this.bra = this.cursor;
            switch (among_var) {
                case 0:
                    break lab0;
                case 1:
                    // (, line 110
                    // call R1, line 110
                    if (!this.r_R1())
                    {
                        break lab0;
                    }
                    // <-, line 110
                    if (!this.slice_from("heid"))
                    {
                        return false;
                    }
                    break;
                case 2:
                    // (, line 113
                    // call en_ending, line 113
                    if (!this.r_en_ending())
                    {
                        break lab0;
                    }
                    break;
                case 3:
                    // (, line 116
                    // call R1, line 116
                    if (!this.r_R1())
                    {
                        break lab0;
                    }
                    if (!(this.out_grouping_b(DutchStemmer.g_v_j, 97, 232)))
                    {
                        break lab0;
                    }
                    // delete, line 116
                    if (!this.slice_del())
                    {
                        return false;
                    }
                    break;
            }
        }
        this.cursor = this.limit - v_1;
        // do, line 120
        v_2 = this.limit - this.cursor;
        var lab1 = true;
        lab1: while (lab1 == true)
        {
            lab1 = false;
            // call e_ending, line 120
            if (!this.r_e_ending())
            {
                break lab1;
            }
        }
        this.cursor = this.limit - v_2;
        // do, line 122
        v_3 = this.limit - this.cursor;
        var lab2 = true;
        lab2: while (lab2 == true)
        {
            lab2 = false;
            // (, line 122
            // [, line 122
            this.ket = this.cursor;
            // literal, line 122
            if (!(this.eq_s_b(4, "heid")))
            {
                break lab2;
            }
            // ], line 122
            this.bra = this.cursor;
            // call R2, line 122
            if (!this.r_R2())
            {
                break lab2;
            }
            // not, line 122
            {
                v_4 = this.limit - this.cursor;
                var lab3 = true;
                lab3: while (lab3 == true)
                {
                    lab3 = false;
                    // literal, line 122
                    if (!(this.eq_s_b(1, "c")))
                    {
                        break lab3;
                    }
                    break lab2;
                }
                this.cursor = this.limit - v_4;
            }
            // delete, line 122
            if (!this.slice_del())
            {
                return false;
            }
            // [, line 123
            this.ket = this.cursor;
            // literal, line 123
            if (!(this.eq_s_b(2, "en")))
            {
                break lab2;
            }
            // ], line 123
            this.bra = this.cursor;
            // call en_ending, line 123
            if (!this.r_en_ending())
            {
                break lab2;
            }
        }
        this.cursor = this.limit - v_3;
        // do, line 126
        v_5 = this.limit - this.cursor;
        var lab4 = true;
        lab4: while (lab4 == true)
        {
            lab4 = false;
            // (, line 126
            // [, line 127
            this.ket = this.cursor;
            // substring, line 127
            among_var = this.find_among_b(DutchStemmer.a_4, 6);
            if (among_var == 0)
            {
                break lab4;
            }
            // ], line 127
            this.bra = this.cursor;
            switch (among_var) {
                case 0:
                    break lab4;
                case 1:
                    // (, line 129
                    // call R2, line 129
                    if (!this.r_R2())
                    {
                        break lab4;
                    }
                    // delete, line 129
                    if (!this.slice_del())
                    {
                        return false;
                    }
                    // or, line 130
                    var lab5 = true;
                    lab5: while (lab5 == true)
                    {
                        lab5 = false;
                        v_6 = this.limit - this.cursor;
                        var lab6 = true;
                        lab6: while (lab6 == true)
                        {
                            lab6 = false;
                            // (, line 130
                            // [, line 130
                            this.ket = this.cursor;
                            // literal, line 130
                            if (!(this.eq_s_b(2, "ig")))
                            {
                                break lab6;
                            }
                            // ], line 130
                            this.bra = this.cursor;
                            // call R2, line 130
                            if (!this.r_R2())
                            {
                                break lab6;
                            }
                            // not, line 130
                            {
                                v_7 = this.limit - this.cursor;
                                var lab7 = true;
                                lab7: while (lab7 == true)
                                {
                                    lab7 = false;
                                    // literal, line 130
                                    if (!(this.eq_s_b(1, "e")))
                                    {
                                        break lab7;
                                    }
                                    break lab6;
                                }
                                this.cursor = this.limit - v_7;
                            }
                            // delete, line 130
                            if (!this.slice_del())
                            {
                                return false;
                            }
                            break lab5;
                        }
                        this.cursor = this.limit - v_6;
                        // call undouble, line 130
                        if (!this.r_undouble())
                        {
                            break lab4;
                        }
                    }
                    break;
                case 2:
                    // (, line 133
                    // call R2, line 133
                    if (!this.r_R2())
                    {
                        break lab4;
                    }
                    // not, line 133
                    {
                        v_8 = this.limit - this.cursor;
                        var lab8 = true;
                        lab8: while (lab8 == true)
                        {
                            lab8 = false;
                            // literal, line 133
                            if (!(this.eq_s_b(1, "e")))
                            {
                                break lab8;
                            }
                            break lab4;
                        }
                        this.cursor = this.limit - v_8;
                    }
                    // delete, line 133
                    if (!this.slice_del())
                    {
                        return false;
                    }
                    break;
                case 3:
                    // (, line 136
                    // call R2, line 136
                    if (!this.r_R2())
                    {
                        break lab4;
                    }
                    // delete, line 136
                    if (!this.slice_del())
                    {
                        return false;
                    }
                    // call e_ending, line 136
                    if (!this.r_e_ending())
                    {
                        break lab4;
                    }
                    break;
                case 4:
                    // (, line 139
                    // call R2, line 139
                    if (!this.r_R2())
                    {
                        break lab4;
                    }
                    // delete, line 139
                    if (!this.slice_del())
                    {
                        return false;
                    }
                    break;
                case 5:
                    // (, line 142
                    // call R2, line 142
                    if (!this.r_R2())
                    {
                        break lab4;
                    }
                    // Boolean test e_found, line 142
                    if (!(this.B_e_found))
                    {
                        break lab4;
                    }
                    // delete, line 142
                    if (!this.slice_del())
                    {
                        return false;
                    }
                    break;
            }
        }
        this.cursor = this.limit - v_5;
        // do, line 146
        v_9 = this.limit - this.cursor;
        var lab9 = true;
        lab9: while (lab9 == true)
        {
            lab9 = false;
            // (, line 146
            if (!(this.out_grouping_b(DutchStemmer.g_v_I, 73, 232)))
            {
                break lab9;
            }
            // test, line 148
            v_10 = this.limit - this.cursor;
            // (, line 148
            // among, line 149
            if (this.find_among_b(DutchStemmer.a_5, 4) == 0)
            {
                break lab9;
            }
            if (!(this.out_grouping_b(DutchStemmer.g_v, 97, 232)))
            {
                break lab9;
            }
            this.cursor = this.limit - v_10;
            // [, line 152
            this.ket = this.cursor;
            // next, line 152
            if (this.cursor <= this.limit_backward)
            {
                break lab9;
            }
            this.cursor--;
            // ], line 152
            this.bra = this.cursor;
            // delete, line 152
            if (!this.slice_del())
            {
                return false;
            }
        }
        this.cursor = this.limit - v_9;
        return true;
    }

    override function stem () : boolean
    {
        var v_1 : int;
        var v_2 : int;
        var v_3 : int;
        var v_4 : int;
        // (, line 157
        // do, line 159
        v_1 = this.cursor;
        var lab0 = true;
        lab0: while (lab0 == true)
        {
            lab0 = false;
            // call prelude, line 159
            if (!this.r_prelude())
            {
                break lab0;
            }
        }
        this.cursor = v_1;
        // do, line 160
        v_2 = this.cursor;
        var lab1 = true;
        lab1: while (lab1 == true)
        {
            lab1 = false;
            // call mark_regions, line 160
            if (!this.r_mark_regions())
            {
                break lab1;
            }
        }
        this.cursor = v_2;
        // backwards, line 161
        this.limit_backward = this.cursor; this.cursor = this.limit;
        // do, line 162
        v_3 = this.limit - this.cursor;
        var lab2 = true;
        lab2: while (lab2 == true)
        {
            lab2 = false;
            // call standard_suffix, line 162
            if (!this.r_standard_suffix())
            {
                break lab2;
            }
        }
        this.cursor = this.limit - v_3;
        this.cursor = this.limit_backward;        // do, line 163
        v_4 = this.cursor;
        var lab3 = true;
        lab3: while (lab3 == true)
        {
            lab3 = false;
            // call postlude, line 163
            if (!this.r_postlude())
            {
                break lab3;
            }
        }
        this.cursor = v_4;
        return true;
    }

    function equals (o : variant) : boolean {
        return o instanceof DutchStemmer;
    }

    function hashCode() : int
    {
        //http://stackoverflow.com/questions/194846/is-there-any-kind-of-hashcode-function-in-javascript
        var classname = "DutchStemmer";
        var hash = 0;
        if (classname.length == 0) return hash;
        for (var i = 0; i < classname.length; i++) {
            var char = classname.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return hash;
    }

}

