package com.example.zsgc.mapper;

import com.example.zsgc.entity.Role;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

public interface RoleMapper {
    @Select("select * from role")
    public List<Role> selectAll();

    @Select("select * from role where roleName like concat('%', #{roleName}, '%')")
    public List<Role> selectByName(String roleName);

    @Select("select * from role where gender=#{gender}")
    public List<Role> selectByGender(int gender);

    @Insert("insert into role(roleName, gender, intro) values (#{roleName},#{gender},#{intro})")
    public void insertRole(Role role);

    @Update("update role set roleName=#{roleName},gender=#{gender},intro=#{intro} where roleId=#{roleId}")
    public void updateRole(Role role);

    @Delete("delete from role where roleId=#{roleId}")
    public void deleteRole(int roleId);
}
