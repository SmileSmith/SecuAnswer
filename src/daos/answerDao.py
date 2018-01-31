#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
    #Author: smilesmith
    #Date: 2018-01-31
    #Desc: 数据库访问接口
"""

from src.units import sqlite


def save_result(result):
    """保存答题结果"""
    sqlite.execute_sql('insert into ai_result (\
        id, ai_type, result_index, result_text, result_type, result_prop, question_id) \
        values (null, ?, ?, ?, ?, ?, ?)',
                       (result.ai_type, result.index, result.text, result.type, result.prop, result.question_id))
